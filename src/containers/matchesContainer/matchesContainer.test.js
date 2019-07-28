import React from 'react';
import { MatchesContainer, mapStateToProps } from './MatchesContainer';
import { shallow } from 'enzyme';


describe('MatchesContainer', () => {

  it('should match the snapshot', () => {
    let mockMatch = [{
      awayTeamLogo: "https://www.api-football.com/public/teams/3700.png",
      awayTeamName: "Always Ready",
      event_date: "2019-07-31",
      fixture_id: 201290,
      homeTeamLogo: "https://www.api-football.com/public/teams/3709.png",
      homeTeamName: "Royal Pari",
      league_id: 476,
      statusShort: "PST",
    }] 
    let wrapper = shallow(<MatchesContainer todaysMatches={mockMatch}/>)
    expect(wrapper).toMatchSnapshot()
  })

})