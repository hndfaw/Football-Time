export const league1Reducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_LEAGUE_1':
      return action.matches
      default:
      return state;
  }
}