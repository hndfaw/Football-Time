import * as actions from './index.js'

describe('actions', () => {
  it('should have a type of SET_LEAGUES', () => {
    const leaguesData = [{league: 'league'}];
    const expectedAction = {
      type: 'SET_LEAGUES',
      leaguesData
    };
    const result = actions.leaguesAction(leaguesData);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_TODAYS_MATCHES', () => {
    const todayMatchesDate = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_TODAYS_MATCHES',
      todayMatchesDate
    };
    const result = actions.setTodaysMatches(todayMatchesDate);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_PREMIER_LEAGUE', () => {
    const matches = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_PREMIER_LEAGUE',
      matches
    };
    const result = actions.setPremierLeague(matches);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_PREMIER_LEAGUE', () => {
    const matches = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_LEAGUE_1',
      matches
    };
    const result = actions.setLeague1(matches);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_CHAMPIONS_LEAGUE', () => {
    const matches = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_CHAMPIONS_LEAGUE',
      matches
    };
    const result = actions.setChampionsLeague(matches);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_BUNDES_LIGA_1', () => {
    const matches = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_BUNDES_LIGA_1',
      matches
    };
    const result = actions.setBundesliga1(matches);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_PRIMERA_DIVISION', () => {
    const matches = [{match: 'match'}];
    const expectedAction = {
      type: 'SET_PRIMERA_DIVISION',
      matches
    };
    const result = actions.setPrimeraDivision(matches);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of SET_SELECTED_LEAGUE', () => {
    const leagueName = 'league';
    const expectedAction = {
      type: 'SET_SELECTED_LEAGUE',
      leagueName
    };
    const result = actions.setSelectedLeague(leagueName);
    expect(result).toEqual(expectedAction);
  })
  
})