import { leaguesReducer } from './leaguesReducer';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { todaysDateReducer } from './todaysDateReducer';

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
      }]
      const expectedAction = {
        type: 'SET_TODAYS_MATCHES',
        todayMatchesDate: [{event_date: "2019-08-31T00:00:00+00:00"}]
      }

      const result = todaysMatchesReducer([], expectedAction)
      expect(result).toEqual(expected)
    })
  })

  describe('todaysDateReducer', () => {
    it('should return the initial state', () => {
      const generateDateToday = () => {
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

      const expected = generateDateToday();
      const result = todaysDateReducer(undefined, {})
      expect(result).toEqual(expected)
    })

    it('should return a an array of todays matches', () => {
      const expected = "2019-08-31"
      const expectedAction = {
        type: 'SET_TODAYS_DATE',
        date: "2019-08-31"
      }

      const result = todaysDateReducer(undefined, expectedAction)
      expect(result).toEqual(expected)
    })
  })
  
})