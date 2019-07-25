export const leaguesAction = leaguesData => ({
  type: 'SET_LEAGUES',
  leaguesData
})

export const setTodaysMatches = (todayMatchesDate) => ({
  type: 'SET_TODAYS_MATCHES',
  todayMatchesDate
})