import React, { Component } from 'react';
import './leaguesTabs.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { fetchOneLeaguesMatches } from '../../apiCalls';
import { setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision, setSelectedLeague } from '../../actions';

export class LeaguesTabs extends Component {

  fetchData = e => {
    let id = parseInt(e.target.id)

      this.props.handleSelectedLeague(`league${id}`)
  
      this.props[`league${id}`].length === 0 ?
  
      fetchOneLeaguesMatches(id).then(data => {
        const cleanedData = this.cleanMatches(data.api.fixtures)
        if (id === 525) {
          this.props.handleLeague1(cleanedData)
        } else if (id === 530) {
          this.props.handleChampionsLeague(cleanedData)
        } else if (id === 754) {
          this.props.handleBundesliga1(cleanedData)
        } else {
          this.props.handlePrimeraDivision(cleanedData)
        }
      })
      .then(() => this.props.selectLeaguesData())
      : this.props.selectLeaguesData()
  }

  cleanMatches = data => {
    const cleanedData = data.map(match => {

      const date = match.event_date.split("").slice(0, 10).join("")
        return {
          event_date: date,
          league_id: match.league_id,
          statusShort: match.statusShort,
          fixture_id: match.fixture_id,
          homeTeamName: match.homeTeam.team_name,
          homeTeamLogo: match.homeTeam.logo,
          awayTeamName: match.awayTeam.team_name,
          awayTeamLogo: match.awayTeam.logo,
          elapsed: match.elapsed,
          goalsHomeTeam: match.goalsHomeTeam,
          goalsAwayTeam: match.goalsAwayTeam,
          status: match.status
        }
      })
      return cleanedData;
  }

  leagueTab = () => {
    const {selectedLeague, leaguesData } = this.props;
    let selectedId = parseInt(selectedLeague.slice(6,9))
    
    const leagueTab = leaguesData.map(league => {
      const btnStyle = (selectedId === league.league_id) ? {background: 'rgba(0,0,0,0.1)'} : null
      return (
        <NavLink  to={`/leagues/${league.league_id}`} className="league-tab" key={league.league_id} id={league.league_id}>
          <button onClick={this.fetchData} style={btnStyle} className="league-btn" id={league.league_id}></button>
          <div className="league-tab-inner-container">
            <img src={league.logo} alt="league logo" className="league-tab-logo" />
            <h4 className="league-tab-name">{league.name}</h4>
          </div>
        </NavLink>
      )
    })
    return leagueTab
  }

  render() {
    return  this.leagueTab()
  }
}

LeaguesTabs.propTypes = {
  leaguesData: PropTypes.array,
  selectedLeague: PropTypes.string,
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  selectedLeague: state.selectedLeague,
  league524: state.league524,
  league525: state.league525,
  league530: state.league530,
  league754: state.league754,
  league775: state.league775,
})

export const mapDispatchToProps = dispatch => ({
  handleLeague1: data => dispatch(setLeague1(data)),
  handlePremierLeague: data => dispatch(setPremierLeague(data)),
  handleChampionsLeague: data => dispatch(setChampionsLeague(data)),
  handleBundesliga1: data => dispatch(setBundesliga1(data)),
  handlePrimeraDivision: data => dispatch(setPrimeraDivision(data)),
  handleSelectedLeague: leagueName => dispatch(setSelectedLeague(leagueName))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesTabs);
