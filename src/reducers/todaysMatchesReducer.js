export const todaysMatchesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODAYS_MATCHES':
      return action.todayMatchesDate
    default:
      return state;
  }
}