import React from 'react';
import { shallow } from 'enzyme';
import {Match} from './Match';



describe('Match', () => {
  
    it('should match the match snapshot', () => {
      let mockMatch = {
        event_date: "2019-08-31T16:30:00+00:00",
        league_id: 754,
        homeTeam: {team_name: 'something', logo: 'logo'},
        awayTeam: {team_name: 'something', logo: 'logo'}
      }
      let wrapper = shallow(<Match match={mockMatch} />, { disableLifecycleMethods: true})

      expect(wrapper).toMatchSnapshot()
    })
})