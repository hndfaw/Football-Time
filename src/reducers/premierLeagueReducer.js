export const premierLeagueReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PREMIER_LEAGUE':
      return action.matches
      default:
      return state;
  }
}