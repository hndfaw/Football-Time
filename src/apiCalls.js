export const fetchLeagues = () => {
  return fetch("https://api-football-v1.p.rapidapi.com/v2/leagues",{
    method: 'GET',
    headers: {"X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com", "X-RapidAPI-Key" : "e766c3e8damshc0c6531779b6d33p1f1ae8jsnc3322faa6a3f"}
  }).then(res => res.json())
  .then(data => data)
  // .catch(error =>  ('Error fetching today\'s leagues...'))
 }


export const fetchTodaysMatches = date => {
  return fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}`, {
    method: 'GET',
    headers: {"X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com", "X-RapidAPI-Key" : "e766c3e8damshc0c6531779b6d33p1f1ae8jsnc3322faa6a3f"}
  })
  .then(res => res.json())
  .then(data => data)
  // .catch(error => error ('Error fetching today\'s matches...'))
}

