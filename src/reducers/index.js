import { combineReducers } from 'redux';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { leaguesReducer } from './leaguesReducer';
import { premierLeagueReducer } from './premierLeagueReducer';
import { league1Reducer } from './league1Reducer';
import { championsLeagueReducer } from './championsLeagueReducer';
import { bundesliga1Reducer } from './bundesliga1Reducer';
import { primeraDivisionReducer } from './primeraDivisionReducer';
import { selectedLeagueReducer } from './selectedLeagueReducer';


export const rootReducer = combineReducers({
  leaguesData: leaguesReducer,
  todaysMatches: todaysMatchesReducer,
  premierLeague: premierLeagueReducer,
  league1: league1Reducer,
  championsLeague: championsLeagueReducer,
  bundesliga1: bundesliga1Reducer,
  primeraDivision: primeraDivisionReducer,
  selectedLeague: selectedLeagueReducer
})