import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todaysMatches.css';
import MatchContainer from '../matchesContainer/MatchesContainer';



export class Leagues extends Component {

 

  filteredLeagus = () => {
    const {todaysMatches, leaguesData} = this.props;

    const filteredLeagus = [];
    todaysMatches.forEach(match => {
        leaguesData.forEach(league => {
          if (league.league_id === match.league_id && !filteredLeagus.includes(league)) {filteredLeagus.push(league) }
        })
    })

    return filteredLeagus
  }



  setMatches = () => {
    const league = this.filteredLeagus().map(league => {
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
    return league
  }

  


  render() {

      const msg = this.setMatches().length !== 0 ? '' : <p className="msg">There are no matches the selected day, change the date to view another day's matches.</p>
    return (
      <main className="main">
       
        {msg}
        {this.setMatches()} 
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  todaysMatches: state.todaysMatches
})

export default connect(mapStateToProps, null)(Leagues)