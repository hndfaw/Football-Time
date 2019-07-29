import React from 'react';
import { shallow } from 'enzyme';
import { MatchDetail } from './MatchDetail';



describe('Home', () => {
  
    it('should match the match snapshot', () => {
      let wrapper = shallow(<MatchDetail  />)
      expect(wrapper).toMatchSnapshot()
    })
})