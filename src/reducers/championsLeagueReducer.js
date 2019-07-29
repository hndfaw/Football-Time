export const championsLeagueReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_CHAMPIONS_LEAGUE':
      return action.matches
      default:
      return state;
  }
}

