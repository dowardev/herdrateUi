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
});
