import React, {Component} from 'react';
import './match.css';

  export class Match extends Component {
  
  render() {
    const {match} = this.props
    // const date = match.event_date.split("").slice(0, 10)
  
  return (
    <section className="match-container">
      <div className="match-second-container">
      <p className="team-name home-team-name">{match.homeTeam.team_name}</p>
      <div className="logos-result-container">
        <div className="home-team-logo-container">
          <img src={match.homeTeam.logo} alt="home team logo" className="small-logo" />
        </div >
        <h4 className="results">{match.goalsHomeTeam}<span> - </span>{match.goalsAwayTeam}</h4>
        <div className="away-team-logo-container">
          <img src={match.awayTeam.logo} alt="away team logo" className="small-logo" />
        </div>
      </div>
      <p className="team-name away-team-name">{match.awayTeam.team_name}</p>
      </div>
      {(match.statusShort !== 'MF' && match.statusShort !== 'NS' && match.statusShort !== 'TBD') ? <div className="match-status">
        <p className="status-content">{match.elapsed}'</p>
      </div> : <p className="date">{match.event_date}</p>}
    </section>
  )
  }
}


export default Match