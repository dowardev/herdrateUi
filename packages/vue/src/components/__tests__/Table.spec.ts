// SPDX-License-Identifier: GPL-3.0-or-later

import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Table from '../table/Table.vue';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
];

const rows = [
  { name: 'Alice', role: 'Developer' },
  { name: 'Bob', role: 'Designer' },
];

describe('Table', () => {
  it('renders headers from columns', () => {
    const wrapper = mount(Table, { props: { columns } });
    const ths = wrapper.findAll('th');
    expect(ths).toHaveLength(2);
    expect(ths[0].text()).toBe('Name');
    expect(ths[1].text()).toBe('Role');
  });

  it('renders rows with data', () => {
    const wrapper = mount(Table, { props: { columns, rows } });
    const tds = wrapper.findAll('td');
    expect(tds).toHaveLength(4);
    expect(tds[0].text()).toBe('Alice');
    expect(tds[1].text()).toBe('Developer');
    expect(tds[2].text()).toBe('Bob');
    expect(tds[3].text()).toBe('Designer');
  });

  it('applies striped class', () => {
    const wrapper = mount(Table, { props: { columns, rows, striped: true } });
    expect(wrapper.classes()).toContain('striped');
  });

  it('applies compact class', () => {
    const wrapper = mount(Table, { props: { columns, rows, compact: true } });
    expect(wrapper.classes()).toContain('compact');
  });

  it('stays tuix by default (no rubik class)', () => {
    const wrapper = mount(Table, { props: { columns, rows } });
    expect(wrapper.classes()).not.toContain('table--rubik');
  });

  it('activates the rubik design line via design prop', () => {
    const wrapper = mount(Table, {
      props: { columns, rows, design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('table--rubik');
    expect(wrapper.attributes('data-design')).toBe('rubik');
  });

  it('has no index column by default in either line', () => {
    const tuix = mount(Table, { props: { columns, rows } });
    expect(tuix.find('th.table__index').exists()).toBe(false);
    expect(tuix.find('td.table__index').exists()).toBe(false);
    expect(tuix.findAll('th')).toHaveLength(2);

    const rubik = mount(Table, {
      props: { columns, rows, design: 'rubik' },
    });
    expect(rubik.find('th.table__index').exists()).toBe(false);
    expect(rubik.find('td.table__index').exists()).toBe(false);
    expect(rubik.findAll('th')).toHaveLength(2);
  });

  it('indexed adds a numbered column in tuix', () => {
    const wrapper = mount(Table, { props: { columns, rows, indexed: true } });
    expect(wrapper.classes()).not.toContain('table--rubik');
    const ths = wrapper.findAll('th');
    expect(ths).toHaveLength(3);
    expect(ths[0].classes()).toContain('table__index');
    const indexCells = wrapper.findAll('td.table__index');
    expect(indexCells).toHaveLength(2);
    expect(indexCells[0].text()).toBe('01');
    expect(indexCells[1].text()).toBe('02');
    expect(wrapper.findAll('tbody tr')[0].findAll('td')[1].text()).toBe(
      'Alice',
    );
  });

  it('indexed renders the rubik ledger styling', () => {
    const wrapper = mount(Table, {
      props: { columns, rows, indexed: true, design: 'rubik' },
    });
    expect(wrapper.classes()).toContain('table--rubik');
    expect(wrapper.findAll('th')).toHaveLength(3);
    const indexCells = wrapper.findAll('td.table__index');
    expect(indexCells).toHaveLength(2);
    expect(indexCells[0].text()).toBe('01');
    expect(indexCells[1].text()).toBe('02');
  });
});
