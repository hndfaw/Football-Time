import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodaysMatches, fetchLeagues } from '../../apiCalls';
import { setTodaysMatches, leaguesAction } from '../../actions';
import  Header  from '../header/Header'
import  Leagues  from '../leagues/Leagues'

class App extends Component {

  componentDidMount() {
    fetchTodaysMatches().then(data =>
      this.props.handleTodaysMatches(data)
      )

      fetchLeagues().then(data => this.filterLeagues(data))
  }


  filterLeagues = leaguesData => {
      const filteredLeagues = leaguesData.filter(league => {
       return  (
          (league.country === 'England' && league.name === 'Premier League') ||
          ( league.name === 'Primera Division') ||
          (league.name === 'Serie A') ||
          ( league.name === 'Ligue 1') ||
          (league.country === 'Germany' && league.name === 'Bundesliga 1') ||
          (league.country === 'World' && league.name === 'Champions League')
         )
          && league
      })
      this.props.handleLeagues(filteredLeagues)
  
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

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data))

})

export default connect(null, mapDispatchToProps)(App);
