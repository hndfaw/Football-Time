import React from 'react';
import {Leagues, mapDispatchToProps} from './Leagues';
import { shallow } from 'enzyme';
import { setSelectedLeague } from '../../actions';

describe('Leagues', () => {

  let wrapper;

  beforeEach(() => {

    const mockMatch = [
      {
        awayTeamLogo: "https://www.api-football.com/public/teams/71.png",
        awayTeamName: "Norwich",
        elapsed: 0,
        event_date: "2019-08-09",
        fixture_id: 157015,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        homeTeamLogo: "https://www.api-football.com/public/teams/40.png",
        homeTeamName: "Liverpool",
        league_id: 524,
        status: "Not Started",
        statusShort: "NS"
      }
    ]
    wrapper = shallow(<Leagues dataLoading={mockMatch} selectedLeague="league524" league524={mockMatch} matches={mockMatch} id={{league_id: 524}} />);
  })

  it('should match the snopshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
 

  it('should dispatch with a setSelectedLeague action when handleSelectedLeague is called', () => {
    const mockDispatch = jest.fn();
    const mockMatch = [{match: 'match'}];
    const mockAction = setSelectedLeague(mockMatch);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleSelectedLeague(mockMatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should set the state as the input changes', () => {
    let event = {target: {value: 'Barcelona'}}
    let expected = {searchTerm: 'Barcelona'};
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state()).toEqual(expected)
  })


})