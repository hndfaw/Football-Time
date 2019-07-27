import { fetchLeagues, fetchTodaysMatches , fetchOneLeaguesMatches} from './apiCalls';



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
        ok: true,
        json: () => Promise.resolve(mockLeague)
      })
    })
  });


  it('fetchLeagues should return a parsed response if status is ok', async () =>{
    const result = await fetchLeagues();
    fetchLeagues()
    expect(result).toEqual(mockLeague)
  })

  it('fetchFilms should return error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve( {
        ok: false,
      })
    })
    await expect(fetchLeagues()).rejects.toEqual(Error('Error fetching leagues'))
  })

  })

  describe('fetchTodaysMatches', () => {
    let mockMatch
    beforeEach( () => {
  
      mockMatch = [{
        'statusShort': "PST",
      }];
  
       window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve( {
          ok: true,
          json: () => Promise.resolve(mockMatch)
        })
      })
    });
  
      it('fetchLeagues should return a parsed response if status is ok', async () =>{
        const result = await fetchTodaysMatches();
        fetchTodaysMatches()
        expect(result).toEqual(mockMatch)
      })
  
      it('fetchFilms should return error if status is not ok', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
          return Promise.resolve( {
            ok: false,
          })
        })
        await expect(fetchTodaysMatches()).rejects.toEqual(Error('Error fetching todays matches'))
      })
  
    })

    describe('fetchOneLeaguesMatches', () => {
      let mockMatch
      beforeEach( () => {
        mockMatch = [{
          'statusShort': "PST",
        }];
    
         window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve( {
            ok: true,
            json: () => Promise.resolve(mockMatch)
          })
        })
      });
    
      it('fetchLeagues should return a parsed response if status is ok', async () =>{
        const result = await fetchOneLeaguesMatches();
        fetchOneLeaguesMatches()
        expect(result).toEqual(mockMatch)
      })
    
      it('fetchFilms should return error if status is not ok', async () => {
        window.fetch = jest.fn().mockImplementationOnce(() => {
          return Promise.resolve( {
            ok: false,
          })
        })
        await expect(fetchOneLeaguesMatches()).rejects.toEqual(Error('Error fetching mathces of single league'))
      })
    
      })

})