import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodaysMatches, fetchLeagues } from '../../apiCalls';
import { setTodaysMatches, leaguesAction } from '../../actions';
import  Header  from '../header/Header'
import  MatchesContainer  from '../matchesContainer/MatchesContainer'

class App extends Component {

  componentDidMount() {
    fetchTodaysMatches().then(data =>
      this.props.handleTodaysMatches(data)
      )

      fetchLeagues().then(data => {
        // const filteredLeagues = data.filter(league => {
        //  return  (league.season === 2019 && league.country === 'Spain') &&
        //      league
          
        // })
        this.props.handleLeagues(data)
      })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MatchesContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data))

})

export default connect(null, mapDispatchToProps)(App);
