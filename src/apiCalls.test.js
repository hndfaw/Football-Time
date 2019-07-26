import { fetchLeagues } from './apiCalls';



describe('apiCalls', () => {

  describe('fetchLeagues', () => {

  let mockLeague

  beforeEach( () => {

    mockLeague = [{
      'country': "Bangladesh",
      'country_code': "BD",
      'flag': "https://www.api-football.com/public/flags/bd.svg",
      'is_current': 0,
      'league_id': 874,
      'logo': null,
      'name': "Premier League",
      'season': 2016,
      'season_end': "2016-12-31",
      'season_start': "2016-07-24",
      'standings': 0,
    }];

     window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve( {
        // ok: true,
        json: () => Promise.resolve(mockLeague)
      })
    })
  });

  // it('should be called with correct data', () => {
  //   const expected = [
  //     'https://api-football-v1.p.rapidapi.com/v2/leagues',
  //     { method: 'GET', headers: {
  //       "X-RapidAPI-Host" : "api-football-v1.p.rapidapi.com",
  //       "X-RapidAPI-Key" : "e766c3e8damshc0c6531779b6d33p1f1ae8jsnc3322faa6a3f" }, body: JSON.stringify(mockLeague) }
  //   ];

  //   fetchLeagues();

  //   expect(window.fetch).toHaveBeenCalledWith(...expected);
  // });


  it('fetchLeagues should return a parsed response if status is ok', async () =>{
    const result = await fetchLeagues();
    fetchLeagues()
    expect(result).toEqual(mockLeague)
  })

  // it.skip('fetchFilms should return error if status is not ok', async () => {
  //   window.fetch = jest.fn().mockImplementationOnce(() => {
  //     return Promise.resolve( {
  //       ok: false,
  //     })
  //   })
  //   await expect(fetchFilms()).rejects.toEqual(Error('Error fetching films'))
  // })

  })



})