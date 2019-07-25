// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import './Leagues.css';
// import MatchContainer from '../MatchContainer';

// class Leagues extends Component {
//   render() {
//     const {liveMatches, leaguesData} = this.props;
//     const filteredLeagus = [];
//      liveMatches.forEach(match => {
//         leaguesData.forEach(league => {
//           if (league.league_id === match.league_id && !filteredLeagus.includes(league)) {filteredLeagus.push(league) }
//         })
//     })
//     const league = filteredLeagus.map(league => {
//       return (
//         <section key={league.league_id} id={league.league_id}>
//         <div   className="league-container">
//           <div className="league-logo-container">
//             <img src={league.logo} alt="league logo" className="league-logo" /> 
//           </div>
//           <h3   className="league-name">{league.name}</h3>
//         </div>
//         <MatchContainer id={league.league_id}/>
//         </section>
//       )
//     })
//     return (
//       <div>
//         {league}
        
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   leaguesData: state.leaguesData,
//   liveMatches: state.liveMatches
// })

// export default connect(mapStateToProps, null)(Leagues)