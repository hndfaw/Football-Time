export const bundesliga1Reducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_BUNDES_LIGA_1':
        const cleanedData = action.matches.map(match => {
          const date = match.event_date.split("").slice(0, 10).join("")
            return {
              event_date: date,
              league_id: match.league_id,
              homeTeam: match.homeTeam,
              awayTeam: match.awayTeam,
              statusShort: match.statusShort,
              fixture_id: match.fixture_id
            }
          })

          return cleanedData
      default:
      return state;
  }
}
