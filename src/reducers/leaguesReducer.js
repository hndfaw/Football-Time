export const leaguesReducer = (state = [{league_id: 10101010101010101, name: 'All Leagues'}], action) => {
  switch(action.type) {
    case 'SET_LEAGUES':
        const filteredLeagues = action.leaguesData.filter(league => {
          return  (
            (league.country === 'England' && league.name === 'Premier League' && league.season === 2019) ||
            (league.country === 'Spain' && league.name === 'Primera Division' && league.season === 2019) ||
            (league.country === 'Italy' && league.name === 'Serie A' && league.season === 2019) ||
            (league.country === 'France' && league.name === 'Ligue 1' && league.season === 2019) ||
            (league.country === 'Germany' && league.name === 'Bundesliga 1' && league.season === 2019) ||
            (league.country === 'World' && league.name === 'Champions League' && league.season === 2019)
           )
            && league
        })
  
        const cleanLeagues = filteredLeagues.map(league => {
          return {
            league_id: league.league_id,
            name: league.name,
            logo: league.logo
          }
        })

      return [...state, ...cleanLeagues];
    default:
      return state;
  }
}