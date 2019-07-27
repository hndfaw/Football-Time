export const oneLeagueMatchesReducer = (state = {524: [], 525: [], 530: [], 754: [], 775: []}, action) => {
  switch(action.type) {
    case 'SET_ONE_LEAGUE_MATCHES':
      if (action.leagueId === 524) {
        return {...state, 524: action.matches}
      } else if (action.leagueId === 525) {
        return {...state, 525: action.matches}
      } else if (action.leagueId === 530) {
        return {...state, 530: action.matches}
      } else if (action.leagueId === 754) {
        return {...state, 754: action.matches}
      } else if (action.leagueId === 775) {
        return {...state, 775: action.matches}
      }
      break
    default:
      return state;
  }
}