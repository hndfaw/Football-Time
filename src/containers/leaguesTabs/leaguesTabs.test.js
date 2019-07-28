import React from 'react';
import {LeaguesTabs} from './LeaguesTabs';
import { shallow } from 'enzyme';

describe('LeaguesTabs', () => {
  it('should match the snapshot', () => {
    const mockLeagues = [
      {
        league_id: 524,
        logo: "https://www.api-football.com/public/leagues/2.png",
        name: "Premier League"
      }
    ]

    const wrapper = shallow(<LeaguesTabs selectedLeague="league524" leaguesData={mockLeagues}/>)
    expect(wrapper).toMatchSnapshot()
  })
})