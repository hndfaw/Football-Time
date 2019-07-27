export const bundesliga1Reducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_BUNDES_LIGA_1':
          return action.matches;
      default:
      return state;
  }
}
