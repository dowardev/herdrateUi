import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Tab from '../tabs/Tab.vue';
import TabPanel from '../tabs/TabPanel.vue';
import Tabs from '../tabs/Tabs.vue';
import TabsList from '../tabs/TabsList.vue';

describe('Tabs', () => {
  it('renders tab triggers and shows active panel', () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a">
          <TabsList>
            <Tab value="a">Tab A</Tab>
            <Tab value="b">Tab B</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
          <TabPanel value="b">Content B</TabPanel>
        </Tabs>
      `,
    });
    expect(wrapper.text()).toContain('Tab A');
    expect(wrapper.text()).toContain('Tab B');
    expect(wrapper.text()).toContain('Content A');
    expect(wrapper.text()).not.toContain('Content B');
  });

  it('switches panel on tab click', async () => {
    const wrapper = mount({
      components: { Tabs, TabsList, Tab, TabPanel },
      template: `
        <Tabs defaultValue="a">
          <TabsList>
            <Tab value="a">Tab A</Tab>
            <Tab value="b">Tab B</Tab>
          </TabsList>
          <TabPanel value="a">Content A</TabPanel>
          <TabPanel value="b">Content B</TabPanel>
        </Tabs>
      `,
    });
    const tabB = wrapper
      .findAll('button')
      .find((b) => b.text().includes('Tab B'));
    await tabB?.trigger('click');
    expect(wrapper.text()).not.toContain('Content A');
    expect(wrapper.text()).toContain('Content B');
  });
});
