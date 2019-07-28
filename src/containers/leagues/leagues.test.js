import React from 'react';
import {Leagues, mapDispatchToProps} from './Leagues';
import { shallow } from 'enzyme';
import { setTodaysMatches, setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision, setSelectedLeague } from '../../actions';

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
    wrapper = shallow(<Leagues selectedLeague="league524" league524={mockMatch} id={{league_id: 524}} />);
  })

  it('should match the snopshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // it('should call changeOneLeaguesMatches when button is clicked', () => {
  //   const e = {target: {id: 524}}
  //   const handleSelectedLeague = jest.fn();
  //   wrapper.instance().changeOneLeaguesMatches(e)
  //   wrapper.find('.league-btn').simulate('click');
  //   expect(wrapper.instance().changeOneLeaguesMatches).toHaveBeenCalled();
  // })

  // it('changeOneLeaguesMatches should call another function', () => {
  //   wrapper.instance().changeOneLeaguesMatches();
  //   expect(wrapper.instance().selectLeaguesData).toHaveBeenCalled();
  // })

 


it('should dispatch with a setTodaysMatches action when handleTodaysMatches is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setTodaysMatches(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handleTodaysMatches(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setPremierLeague action when handlePremierLeague is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setPremierLeague(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handlePremierLeague(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setLeague1 action when handleLeague1 is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setLeague1(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handleLeague1(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setChampionsLeague action when handleChampionsLeague is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setChampionsLeague(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handleChampionsLeague(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setBundesliga1 action when handleBundesliga1 is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setBundesliga1(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handleBundesliga1(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setPrimeraDivision action when handlePrimeraDivision is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setPrimeraDivision(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handlePrimeraDivision(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

it('should dispatch with a setSelectedLeague action when handleSelectedLeague is called', () => {
  const mockDispatch = jest.fn();
  const mockMatch = [{match: 'match'}];
  const mockAction = setSelectedLeague(mockMatch);
  const mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.handleSelectedLeague(mockMatch);
  expect(mockDispatch).toHaveBeenCalledWith(mockAction);
})

})