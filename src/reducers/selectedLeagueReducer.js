export const selectedLeagueReducer = (state = 'premierLeague', action) => {
  switch(action.type) {
  case'SET_SELECTED_LEAGUE':
    return action.leagueName
  default:
      return state
  }
}