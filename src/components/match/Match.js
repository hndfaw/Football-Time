import React, {Component} from 'react';
import './match.css';
import {Link} from 'react-router-dom';


  export class Match extends Component {
  
  render() {
    const {match} = this.props
  
  return (
    <Link className="match-container" key={match.fixture_id}>
      <div className="match-second-container">
      <p className="team-name home-team-name">{match.homeTeamName}</p>
      <div className="logos-result-container">
        <div className="home-team-logo-container">
          <img src={match.homeTeamLogo} alt="home team logo" className="small-logo" />
        </div >
        <h4 className="results">{match.goalsHomeTeam}<span> - </span>{match.goalsAwayTeam}</h4>
        <div className="away-team-logo-container">
          <img src={match.awayTeamLogo} alt="away team logo" className="small-logo" />
        </div>
      </div>
      <p className="team-name away-team-name">{match.awayTeamName}</p>
      </div>
      {(match.statusShort === '1H' || match.statusShort === 'HT' || match.statusShort === '2H' || match.statusShort === 'ET' || match.statusShort === 'P' || match.statusShort === 'BT') ?
      <div className="match-status">
        <p className="status-content">{match.elapsed}'</p>
      </div> :
      <p className="date">{match.event_date}</p>
      }
      <p className="match-status">{match.status}</p>
    </Link>
  )
  }
}


export default Match