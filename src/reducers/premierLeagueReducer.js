export const premierLeagueReducer = (state = [{x: "x"}], action) => {
  switch(action.type) {
    case 'SET_PREMIER_LEAGUE':
      return action.matches
      default:
      return state;
  }
}