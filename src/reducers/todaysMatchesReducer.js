export const todaysMatchesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_TODAYS_MATCHES':
        const cleanedData = action.todayMatchesDate.map(match => {
        const date = match.event_date.split("").slice(0, 10).join("")

        return {
            event_date: date,
            league_id: match.league_id,
            statusShort: match.statusShort,
            fixture_id: match.fixture_id,
            homeTeamName: match.homeTeam.team_name,
            homeTeamLogo: match.homeTeam.logo,
            awayTeamName: match.awayTeam.team_name,
            awayTeamLogo: match.awayTeam.logo,
            elapsed: match.elapsed,
            goalsHomeTeam: match.goalsHomeTeam,
            goalsAwayTeam: match.goalsAwayTeam,
            status: match.status
          }
        })
        
      return cleanedData
    default:
      return state;
  }
}