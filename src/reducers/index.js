import { combineReducers } from 'redux';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { leaguesReducer } from './leaguesReducer';
import {oneLeagueMatchesReducer} from './oneLeagueMatchesReducer';


export const rootReducer = combineReducers({
  leaguesData: leaguesReducer,
  todaysMatches: todaysMatchesReducer,
  leagueMatches: oneLeagueMatchesReducer
})