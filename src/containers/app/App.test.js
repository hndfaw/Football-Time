import React from 'react';
import { App , mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { setTodaysMatches, leaguesAction } from '../../actions';



describe('App', ()=> {
  it('should match the snapshot', ()=> {
    let wrapper = shallow(<App onDayDate={{date: '2019-01-01'}}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should dispatch with a setTodaysMatches action when handleTodaysMatches is called', () => {
    const mockDispatch = jest.fn();
    const mockMatches = [{}];
    const mockAction = setTodaysMatches(mockMatches);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleTodaysMatches(mockMatches);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should dispatch with a leaguesAction action when handleLeagues is called', () => {
    const mockDispatch = jest.fn();
    const mockMatches = [{}];
    const mockAction = leaguesAction(mockMatches);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handleLeagues(mockMatches);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

})