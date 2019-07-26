import { combineReducers } from 'redux';
import { todaysMatchesReducer } from './todaysMatchesReducer';
import { leaguesReducer } from './leaguesReducer';
import { todaysDateReducer } from './todaysDateReducer';


export const rootReducer = combineReducers({
  leaguesData: leaguesReducer,
  todaysMatches: todaysMatchesReducer,
  oneDayDate: todaysDateReducer
})