import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodaysMatches, fetchLeagues } from '../../apiCalls';
import { setTodaysMatches, leaguesAction } from '../../actions';
import  Header  from '../header/Header';
import  Leagues  from '../leagues/Leagues';

export class App extends Component {

  componentDidMount() {
    const date = this.props.oneDayDate.date
    console.log('runing')
    fetchTodaysMatches(date).then(data => this.cleanMatches(data))

    fetchLeagues().then(data => this.filterLeagues(data))
  }

    cleanMatches = data => {
    const cleanedData = data.map(match => {
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
    this.props.handleTodaysMatches(cleanedData)
  }




  filterLeagues = leaguesData => {
      const filteredLeagues = leaguesData.filter(league => {

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

      this.props.handleLeagues(cleanLeagues)
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Leagues />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  oneDayDate: state.oneDayDate
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
