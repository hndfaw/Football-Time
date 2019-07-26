const generateDateToday = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return (yyyy + '-' + mm + '-' + dd);
}


export const todaysDateReducer = (state = '2019-08-31', action) => {
  console.log(action.date)
  switch(action.type) {
    
    case 'SET_TODAYS_DATE':
      return action.date
    default:
      return state
  }
}