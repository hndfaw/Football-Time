export const leaguesAction = leaguesData => ({
  type: 'SET_LEAGUES',
  leaguesData
})

export const setTodaysMatches = todayMatchesDate => ({
  type: 'SET_TODAYS_MATCHES',
  todayMatchesDate
})

export const setPremierLeague = matches => ({
  type: 'SET_PREMIER_LEAGUE',
  matches
})

export const setLeague1 = matches => ({
  type: 'SET_LEAGUE_1',
  matches
})

export const setChampionsLeague = matches => ({
  type: 'SET_CHAMPIONS_LEAGUE',
  matches
})

export const setBundesliga1 = matches => ({
  type: 'SET_BUNDES_LIGA_1',
  matches
})

export const setPrimeraDivision = matches => ({
  type: 'SET_PRIMERA_DIVISION',
  matches
})

export const setSelectedLeague = leagueName => ({
  type: 'SET_SELECTED_LEAGUE',
  leagueName
})

