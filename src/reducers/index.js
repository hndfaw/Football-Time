import { combineReducers } from 'redux';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { leaguesReducer } from './leaguesReducer';


export const rootReducer = combineReducers({
  leaguesData: leaguesReducer,
  todaysMatches: todaysMatchesReducer
})