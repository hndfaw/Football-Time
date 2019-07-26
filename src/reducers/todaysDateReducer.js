export const todaysDateReducer = (state = {date: '2019-08-31'}, action) => {
  switch(action.type) {
    case 'SET_TODAYS_DATE':
      return {...state, date: action.date}
    default:
      return state
  }
}