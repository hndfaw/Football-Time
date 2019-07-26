export const leaguesAction = leaguesData => ({
  type: 'SET_LEAGUES',
  leaguesData
})

export const setTodaysMatches = todayMatchesDate => ({
  type: 'SET_TODAYS_MATCHES',
  todayMatchesDate
})

export const setTodaysDate = date => ({
  type: 'SET_TODAYS_DATE',
  date
})