// import React from 'react';
import {mapDispatchToProps} from './Leagues';
// import { shallow } from 'enzyme';
import { setTodaysMatches, setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision, setSelectedLeague } from '../../actions';

describe('League', () => {

//   it('should match the snopshot', () => {
//     const mockProp = {
//       leaguesData: [{league_id: 524}],
//       league524: [{}],
//       league525: [{}],
//       league530: [{}],
//       league754: [{}],
//       league775: [{}],
//       selectedLeague: 'league524'
//     }
//     const x = [{league_id: 524}]
//     const wrapper = shallow(<League leaguesData={x}/>);
//     expect(wrapper).toMatchSnapshot()
//   })

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