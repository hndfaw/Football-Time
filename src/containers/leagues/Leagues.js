import React, { Component } from 'react';
import { connect } from 'react-redux';
import './leagues.css';
import MatchContainer from '../matchesContainer/MatchesContainer';
import { fetchTodaysMatches } from '../../apiCalls';
import { setTodaysMatches } from '../../actions';



class Leagues extends Component {

  changeTodaysDate = e => {
    fetchTodaysMatches(e.target.value).then(data => this.props.handleTodaysMatches(data.api.fixtures))
  }


  render() {
    const {todaysMatches, leaguesData} = this.props;
    const filteredLeagus = [];
    todaysMatches.forEach(match => {
        leaguesData.forEach(league => {
          if (league.league_id === match.league_id && !filteredLeagus.includes(league)) {filteredLeagus.push(league) }
        })
    })
    
    const league = filteredLeagus.map(league => {

      return (
        <section key={league.league_id} id={league.league_id}>
        <div className="league-container">
          <div className="league-logo-container">
            <img src={league.logo} alt="league logo" className="league-logo" /> 
          </div>
          <h3 className="league-name">{league.name}</h3>
        </div>
        <MatchContainer id={league.league_id}/>
        </section>
      )
    })
    return (
      <main className="main">
        <div>
              <input type="date" onChange={this.changeTodaysDate}/>
        </div>
        {league} 
        leaguess....
      </main>
    )
  }
}

const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  todaysMatches: state.todaysMatches
})

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Leagues)