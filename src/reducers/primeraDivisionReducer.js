export const primeraDivisionReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PRIMERA_DIVISION':
      return action.matches
      default:
      return state;
  }
}