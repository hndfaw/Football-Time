import React, { Component } from 'react';
import './leaguesTabs.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class LeaguesTabs extends Component {

  leagueTab = () => {
    const {selectedLeague, leaguesData } = this.props;
    let selectedId = parseInt(selectedLeague.slice(6,9))
    
    const leagueTab = leaguesData.map(league => {
      const btnStyle = (selectedId === league.league_id) ? {background: 'rgba(0,0,0,0.1)'} : null
      return (
        <div className="league-tab" key={league.league_id}>
          <button onClick={this.props.changeOneLeaguesMatches} style={btnStyle} className="league-btn" id={league.league_id}></button>
          <div className="league-tab-inner-container">
            <img src={league.logo} alt="league logo" className="league-tab-logo" />
            <h4 className="league-tab-name">{league.name}</h4>
          </div>
        </div>
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
  selectedLeague: state.selectedLeague
})

export default connect(mapStateToProps, null)(LeaguesTabs);
