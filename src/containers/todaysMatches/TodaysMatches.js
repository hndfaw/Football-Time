import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './todaysMatches.css';
import MatchesContainer from '../matchesContainer/MatchesContainer';
import { fetchTodaysMatches } from '../../apiCalls';
import { setTodaysMatches } from '../../actions';



export class TodaysMatches extends Component {

  changeTodaysDate = e => {
    fetchTodaysMatches(e.target.value).then(data => this.props.handleTodaysMatches(data.api.fixtures))
  }

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

  setNumOfLeagues = (num) => {
    this.setState({numTodaysLeagues: num})
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
        <MatchesContainer id={league.league_id}/>
        </section>
      )
    })
    return league
  }

  
  render() {
    const msg = this.setMatches().length !== 0 ? '' : <p className="msg">There are no matches the selected day, change the date to view another day's matches.</p>

    return (
      <main className="main-todays-matches">
        <div>
           <input type="date" className="date-picker" onChange={this.changeTodaysDate}/>
        </div>
        {msg}
        {this.setMatches()} 
      </main>
    )
  }
}

TodaysMatches.propTypes = {
  leaguesData: PropTypes.array,
  todaysMatches: PropTypes.array
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  todaysMatches: state.todaysMatches
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodaysMatches)