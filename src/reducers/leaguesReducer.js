export const leaguesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_LEAGUES':
      return action.leaguesData;
    default:
      return state;
  }
}