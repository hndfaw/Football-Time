import React from 'react';
import { LeaguesTabs , mapDispatchToProps} from './LeaguesTabs';
import { shallow } from 'enzyme';
import {  setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision, setSelectedLeague } from '../../actions';

describe('LeaguesTabs', () => {
  let mockLeagues;
  let wrapper;
  let mockMatch;
   
  beforeEach(() => {
     mockMatch = [
      {match: 'match',
      id: 524
    
    }
    ]
     mockLeagues = [
      {
        league_id: 524,
        logo: "https://www.api-football.com/public/leagues/2.png",
        name: "Premier League"
      }
    ]
     wrapper = shallow(<LeaguesTabs selectedLeague="league524" leaguesData={mockLeagues} handleSelectedLeague={jest.fn()} league524={mockMatch} selectLeaguesData={jest.fn()} />)
    
    })
  

  it('should match the snapshot', () => { 
    expect(wrapper).toMatchSnapshot()
  })
    
  it.skip('should call fetchData when button is clicked', () => {
    const e = {target: {id: 524}}
    wrapper.instance().fetchData(e)
    wrapper.find('.league-btn').simulate('click');
    expect(wrapper.instance().fetchData).toHaveBeenCalled();
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