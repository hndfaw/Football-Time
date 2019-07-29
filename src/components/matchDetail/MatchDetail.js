import React from 'react';
import './matchDetail.css';


function MatchDetail({ homeTeamLogo, awayTeamLogo, homeTeamName, goalsHomeTeam, goalsAwayTeam, statusShort , elapsed, event_date, awayTeamName, status}) {

  return (
    <section className="match-detail-container">
      <div className="both-teams-container">
        <div className="single-team-container">
            <img src={homeTeamLogo} alt="home team logo" />
            <h4 className="detail-team-name">{homeTeamName}</h4>
        </div>
        <div>
          
        </div>
        <div className="single-team-container">
            <img src={awayTeamLogo} alt="away team logo" />
            <h4 className="detail-team-name">{awayTeamName}</h4>
        </div>
        
      </div>
    </section>
    
  )
}


export default  MatchDetail
