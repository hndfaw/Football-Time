import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match the snopshot', () => {
    let wrapper = shallow(<Header selectedLeague="league524" />);
    expect(wrapper).toMatchSnapshot()
  })
})