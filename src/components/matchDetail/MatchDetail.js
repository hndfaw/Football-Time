import React from 'react';
import './matchDetail.css';
import PropTypes from 'prop-types';


export const MatchDetail = ({ homeTeamLogo, awayTeamLogo, homeTeamName, goalsHomeTeam, goalsAwayTeam, event_date, awayTeamName, status}) => {

  return (
    <section className="match-detail-container">
      <div className="both-teams-container">
        <div className="single-team-container">
            <img src={homeTeamLogo} alt="home team logo" />
            <h4 className="detail-team-name">{homeTeamName}</h4>
        </div>
          <h4 className="detail-result"><span>{goalsHomeTeam}</span> - <span>{goalsAwayTeam}</span></h4>
        <div className="single-team-container">
            <img src={awayTeamLogo} alt="away team logo" />
            <h4 className="detail-team-name">{awayTeamName}</h4>
        </div>
      </div>
        <h5 className="detail-other-info"><span>{status}</span> | <span>{event_date}</span></h5>

    </section>
    
  )
}

MatchDetail.propTypes = {
  homeTeamLogo : PropTypes.string,
  awayTeamLogo : PropTypes.string,
  homeTeamName : PropTypes.string,
  goalsHomeTeam : PropTypes.number,
  goalsAwayTeam : PropTypes.number,
  event_date: PropTypes.string,
  awayTeamName : PropTypes.string,
  status: PropTypes.string
}


export default  MatchDetail
