import { leaguesReducer } from './leaguesReducer';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { premierLeagueReducer } from './premierLeagueReducer';

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

  describe('premierLeaguesReducer', () => {
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


  
})