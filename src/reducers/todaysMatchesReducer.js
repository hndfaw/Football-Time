export const todaysMatchesReducer = (state = [], action) => {
  switch(action.type) {
    
    case 'SET_TODAYS_MATCHES':
        console.log(action.todayMatchesDate)
      return action.todayMatchesDate
    default:
      return state;
  }
}