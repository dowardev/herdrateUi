// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import Tab from '../tabs/Tab.vue';
import TabPanel from '../tabs/TabPanel.vue';
import Tabs from '../tabs/Tabs.vue';
import TabsList from '../tabs/TabsList.vue';

const rubikTemplate = `
  <Tabs defaultValue="a" design="rubik">
    <TabsList>
      <Tab value="a">Tab A</Tab>
      <Tab value="b">Tab B</Tab>
    </TabsList>
    <TabPanel value="a">Content A</TabPanel>
    <TabPanel value="b">Content B</TabPanel>
  </Tabs>
`;

const tuixTemplate = `
  <Tabs defaultValue="a">
    <TabsList>
      <Tab value="a">Tab A</Tab>
      <Tab value="b">Tab B</Tab>
    </TabsList>
    <TabPanel value="a">Content A</TabPanel>
    <TabPanel value="b">Content B</TabPanel>
  </Tabs>
`;

function mountTabs(template: string) {
  return mount({
    components: { Tabs, TabsList, Tab, TabPanel },
    template,
  });
}

describe('Tabs', () => {
  it('renders tab triggers and shows active panel', () => {
    const wrapper = mountTabs(tuixTemplate);
    expect(wrapper.text()).toContain('Tab A');
    expect(wrapper.text()).toContain('Tab B');
    expect(wrapper.text()).toContain('Content A');
    expect(wrapper.text()).not.toContain('Content B');
  });

  it('switches panel on tab click', async () => {
    const wrapper = mountTabs(tuixTemplate);
    const tabB = wrapper
      .findAll('button')
      .find((b) => b.text().includes('Tab B'));
    await tabB?.trigger('click');
    expect(wrapper.text()).not.toContain('Content A');
    expect(wrapper.text()).toContain('Content B');
  });

  it('stays tuix by default on Tabs root (no rubik class)', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a">
          <TabsList>
            <Tab value="a">Tab A</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
        </Tabs>
      `,
    });
    expect(wrapper.find('.tabs').classes()).not.toContain('tabs--rubik');
  });

  it('activates the rubik design line on Tabs root via design prop', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a" design="rubik">
          <TabsList>
            <Tab value="a">Tab A</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
        </Tabs>
      `,
    });
    const root = wrapper.find('.tabs');
    expect(root.classes()).toContain('tabs--rubik');
    expect(root.attributes('data-design')).toBe('rubik');
  });

  it('children follow a dynamic parent design change (provide/inject)', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a" :design="line">
          <TabsList>
            <Tab value="a">Tab A</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
        </Tabs>
      `,
      data: () => ({ line: 'tuix' as const }),
    });
    await nextTick();
    expect(wrapper.find('.tab').classes()).not.toContain('tab--rubik');
    await wrapper.setData({ line: 'rubik' });
    await nextTick();
    expect(wrapper.find('.tab').classes()).toContain('tab--rubik');
    expect(wrapper.find('.tabs-list').classes()).toContain('tabs-list--rubik');
  });

  it('activates rubik on Tab via design prop', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a">
          <TabsList>
            <Tab value="a" design="rubik">Tab A</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
        </Tabs>
      `,
    });
    expect(wrapper.find('.tab').classes()).toContain('tab--rubik');
  });

  it('rubik hooks every subcomponent and keeps active state + content parity', async () => {
    const wrapper = mountTabs(rubikTemplate);
    // ancestor inheritance resolves on mount: wait a tick
    await nextTick();
    expect(wrapper.find('.tabs-list').classes()).toContain('tabs-list--rubik');
    expect(wrapper.find('.tab-panel').classes()).toContain('tab-panel--rubik');
    const tabs = wrapper.findAll('.tab');
    expect(tabs[0].classes()).toContain('tab--active');
    expect(tabs[1].classes()).not.toContain('tab--active');
    // design-only change: same labels and content as tuix
    const tuix = mountTabs(tuixTemplate);
    expect(wrapper.text()).toBe(tuix.text());
  });
});
