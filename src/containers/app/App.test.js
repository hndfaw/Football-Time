import React from 'react';
import { App , mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import { setTodaysMatches, leaguesAction, setPremierLeague } from '../../actions';
import { fetchTodaysMatches, fetchLeagues, fetchOneLeaguesMatches } from '../../apiCalls';

jest.mock('../../apiCalls', () => ({
  fetchTodaysMatches: jest.fn().mockImplementation(() => {
    return [{match: 'match'}]
  }),

  fetchLeagues: jest.fn().mockImplementation(() => {
    return [{league: 'league'}]
  }),
  
  fetchOneLeaguesMatches: jest.fn().mockImplementation(() => {
    return [{match: 'match'}]
  })
}));


describe('App', ()=> {


  it('should call fetchTodaysMatches when component mounts', () => {
    let wrapper = shallow(<App todaysMatches={[{match: 'match'}]}/>);
    fetchTodaysMatches.mockResolvedValue([{match: 'match'}]);
    wrapper.instance().componentDidMount();
    expect(fetchTodaysMatches).toHaveBeenCalled();
  });

  it.skip('should call fetchLeagues when component mounts', () => {

    let wrapper = shallow(<App todaysMatches={[{match: 'match'}]}/>);
    fetchLeagues.mockResolvedValue([{match: 'match'}]);
    wrapper.instance().componentDidMount();
    expect(fetchLeagues).toHaveBeenCalled();
  });

  it.skip('should call fetchOneLeaguesMatches when component mounts', () => {
    let wrapper = shallow(<App todaysMatches={[{match: 'match'}]}/>);
    fetchOneLeaguesMatches.mockResolvedValue([{match: 'match'}]);
    wrapper.instance().componentDidMount();
    expect(fetchOneLeaguesMatches).toHaveBeenCalled();
  });

  



  // it.skip('componenetDidMoutn', () => {
  //   const props = {handleTodaysMatches: jest.fn(), onDayDate: {date: '2019-01-01'}, todaysMatches: [{match: 'match'}]}
  //   const fetchTodaysMatches = jest.fn()
  //   let wrapper = shallow(<App {...props}/>);

  //   wrapper.instance().componentDidMount()
  //   expect(fetchTodaysMatches).toHaveBeenCalled()
  // })

  it('should match the snapshot', ()=> {
    let wrapper = shallow(<App onDayDate={{date: '2019-01-01'}} todaysMatches={[{match: 'match'}]}/>);
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

  it('should dispatch with a setPremierLeague action when handlePremierLeague is called', () => {
    const mockDispatch = jest.fn();
    const mockMatch = [{match: 'match'}];
    const mockAction = setPremierLeague(mockMatch);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.handlePremierLeague(mockMatch);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('cleanMatches should return clean matches', () => {
    const data = [
      {
        awayTeam: {team_id: 71, team_name: "Norwich", logo: "https://www.api-football.com/public/teams/71.png"},
        elapsed: 0,
        event_date: "2020-05-17T14:00:00+00:00",
        event_timestamp: 1589724000,
        firstHalfStart: null,
        fixture_id: 157391,
        goalsAwayTeam: null,
        goalsHomeTeam: null,
        homeTeam: {team_id: 50, team_name: "Manchester City", logo: "https://www.api-football.com/public/teams/50.png"},
        league_id: 524,
        referee: null,
        round: "Regular Season - 38",
        score: {halftime: null, fulltime: null, extratime: null, penalty: null},
        secondHalfStart: null,
        status: "Not Started",
        statusShort: "NS",
        venue: "Etihad Stadium (Manchester)",
      }
    ]
    

    const cleanData = [{
      awayTeamLogo: "https://www.api-football.com/public/teams/71.png",
      awayTeamName: "Norwich",
      elapsed: 0,
      event_date: "2020-05-17",
      fixture_id: 157391,
      goalsAwayTeam: null,
      goalsHomeTeam: null,
      homeTeamLogo: "https://www.api-football.com/public/teams/50.png",
      homeTeamName: "Manchester City",
      league_id: 524,
      status: "Not Started",
      statusShort: "NS"
    }]

    let wrapper = shallow(<App onDayDate={{date: '2019-01-01'}}  todaysMatches={[{match: 'match'}]}/>);
  
    const result = wrapper.instance().cleanMatches(data)
    expect(result).toEqual(cleanData);
  })



  

  it('today', () => {
    const expected = () => {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      return (yyyy + '-' + mm + '-' + dd);
    }
    let wrapper = shallow(<App onDayDate={{date: '2019-01-01'}}  todaysMatches={[{match: 'match'}]}/>);
    expect(wrapper.instance().today()).toEqual(expected())
  })

  it('should return an array of Todays Matches', () => {
    const mockState = {
      todaysMatches: [{match: 'match'}],
    }
    const expected = {
      todaysMatches: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return an array of League 524', () => {
    const mockState = {
      league524: [{match: 'match'}],
    }
    const expected = {
      league524: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return an array of League 525', () => {
    const mockState = {
      league525: [{match: 'match'}],
    }
    const expected = {
      league525: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return an array of League 530', () => {
    const mockState = {
      league530: [{match: 'match'}],
    }
    const expected = {
      league530: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return an array of League 754', () => {
    const mockState = {
      league754: [{match: 'match'}],
    }
    const expected = {
      league754: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

  it('should return an array of League 775', () => {
    const mockState = {
      league775: [{match: 'match'}],
    }
    const expected = {
      league775: [{match: 'match'}]
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });

})