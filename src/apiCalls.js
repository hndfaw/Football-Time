export const fetchLeagues = ()=> {
   return fetch('https://api-football-v1.p.rapidapi.com/v2/leagues', {
    method: 'GET',
    headers: {"X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com", "X-RapidAPI-Key" : "api-key-needed"}
  })
     .then(response => {
       if(!response.ok) {
         throw Error ('Error fetching leagues')
       } else {
       return response.json()
       }
     })
};


export const fetchTodaysMatches = date => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}`, {
   method: 'GET',
   headers: {"X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com", "X-RapidAPI-Key" : "api-key-needed"}
 })
    .then(response => {
      if(!response.ok) {
        throw Error ('Error fetching todays matches')
      } else {
      return response.json()
      }
    })
};

export const fetchOneLeaguesMatches = leagueNum => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueNum}`, {
   method: 'GET',
   headers: {"X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com", "X-RapidAPI-Key" : "api-key-needed"}
 })
    .then(response => {
      if(!response.ok) {
        throw Error ('Error fetching mathces of single league')
      } else {
      return response.json()
      }
    })
};

