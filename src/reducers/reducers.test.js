import { leaguesReducer } from './leaguesReducer';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { premierLeagueReducer } from './premierLeagueReducer';
import { primeraDivisionReducer } from './primeraDivisionReducer';
import { selectedLeagueReducer } from './selectedLeagueReducer';
import { league1Reducer } from './league1Reducer';
import { bundesliga1Reducer } from './bundesliga1Reducer';
import { championsLeagueReducer } from './championsLeagueReducer';

describe('Reducers', () => {

  describe('leaguesReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = leaguesReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of leagues', () => {
      const expected = [{name: 'Premier League'}]
      const expectedAction = {
        type: 'SET_LEAGUES',
        leaguesData: [{name: 'Premier League', country: 'England', season: 2019}]
      }
      const result = leaguesReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('todaysMatchesReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = todaysMatchesReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of todays matches', () => {
  
      const expected = [{
        "awayTeam": undefined,
        "event_date": "2019-08-31",
        "fixture_id": undefined,
        "homeTeam": undefined,
        "league_id": undefined,
        "statusShort": undefined,
        "homeTeamName": 'teamOne',
        "awayTeamName": 'teamTwo'
      }]
      const expectedAction = {
        type: 'SET_TODAYS_MATCHES',
        todayMatchesDate: [{event_date: "2019-08-31T00:00:00+00:00", homeTeam: {team_name:"teamOne"}, awayTeam: {team_name:"teamTwo"}}]
      }
      const result = todaysMatchesReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('premierLeagueReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = premierLeagueReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of premier leagues matches', () => {
      const expected = [{match: 'match'}]
      const expectedAction = {
        type: 'SET_PREMIER_LEAGUE',
        matches: [{match: 'match'}]
      }
      const result = premierLeagueReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('primeraDivisionReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = primeraDivisionReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of premier leagues matches', () => {
      const expected = [{match: 'match'}]
      const expectedAction = {
        type: 'SET_PRIMERA_DIVISION',
        matches: [{match: 'match'}]
      }
      const result = primeraDivisionReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('selectedLeagueReducer', () => {
    it('should return the initial state', () => {
      const expected = 'league524';
      const result = selectedLeagueReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return new league name', () => {
      const expected = 'league524'
      const expectedAction = {
        type: "SET_SELECTED_LEAGUE",
        leagueName: "league524"
      }
      const result = selectedLeagueReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('league1Reducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = league1Reducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of league 1 matches', () => {
      const expected = [{match: 'match'}]
      const expectedAction = {
        type: 'SET_LEAGUE_1',
        matches: [{match: 'match'}]
      }
      const result = league1Reducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('bundesliga1Reducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = bundesliga1Reducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of league 1 matches', () => {
      const expected = [{match: 'match'}]
      const expectedAction = {
        type: 'SET_BUNDES_LIGA_1',
        matches: [{match: 'match'}]
      }
      const result = bundesliga1Reducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('championsLeagueReducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const result = championsLeagueReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of league 1 matches', () => {
      const expected = [{match: 'match'}]
      const expectedAction = {
        type: 'SET_CHAMPIONS_LEAGUE',
        matches: [{match: 'match'}]
      }
      const result = championsLeagueReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  
})