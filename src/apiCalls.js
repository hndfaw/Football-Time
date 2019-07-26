import unirest  from 'unirest';

export const fetchLeagues = () => {
  return unirest.get('https://api-football-v1.p.rapidapi.com/v2/leagues')
  .header("X-RapidAPI-Key",
  '04ef452763msh47f421084b1787bp157729jsn439321da6cdb')
  .then(data => data.body.api.leagues)
  .catch(error => error ('Error fetching leagues...'))
}


export const fetchTodaysMatches = date => {
  return unirest.get(`https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}`)
  .header("X-RapidAPI-Key", 'e766c3e8damshc0c6531779b6d33p1f1ae8jsnc3322faa6a3f')
  .then(data => data.body.api.fixtures)
  .catch(error => error ('Error fetching today\'s matches...'))
}

