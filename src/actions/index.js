export const leaguesAction = leaguesData => ({
  type: 'SET_LEAGUES',
  leaguesData
})

export const setTodaysMatches = todayMatchesDate => ({
  type: 'SET_TODAYS_MATCHES',
  todayMatchesDate
})

export const setOneLeagueMatches = (leagueId, matches) => ({
  type: 'SET_ONE_LEAGUE_MATCHES',
  leagueId,
  matches
})