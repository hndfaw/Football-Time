import { combineReducers } from 'redux';
import { todaysMatchesReducer } from './todaysMatchesReducer';

export const rootReducer = combineReducers({
  todaysMatches: todaysMatchesReducer
})