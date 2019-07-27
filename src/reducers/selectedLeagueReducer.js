export const selectedLeagueReducer = (state = 'league524', action) => {
  switch(action.type) {
  case'SET_SELECTED_LEAGUE':
    return action.leagueName
  default:
      return state
  }
}