import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';



describe('Home', () => {
  
    it('should match the match snapshot', () => {
      let wrapper = shallow(<Home  />)
      expect(wrapper).toMatchSnapshot()
    })
})