import React, { Component } from 'react';
// import ballIcon from '../../images/ball-icon.png';
import {connect} from 'react-redux';
import './league.css';
import { fetchOneLeaguesMatches } from '../../apiCalls';
import { setTodaysMatches, setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision } from '../../actions';




class League extends Component {

  changeOneLeaguesMatches = e => {
    let id = parseInt(e.target.id)
    fetchOneLeaguesMatches(id).then(data => {

      if (id === 524) {
        this.props.handlePremierLeague(data.api.fixtures)
      } else if (id === 525) {
        this.props.handleLeague1(data.api.fixtures)
      } else if (id === 530) {
        this.props.handleChampionsLeague(data.api.fixtures)
      } else if (id === 754) {
        this.props.handleBundesliga1(data.api.fixtures)
      } else {
        this.props.handlePrimeraDivision(data.api.fixtures)
      }
    })
    .then(() => this.selectLeaguesData());
    
  }

  selectLeaguesData = () => {
    const data = this.props[this.props.selectedLeague].map(match => 
      console.log(match)
    )
  }

  render() {
    const leagueTab = this.props.leaguesData.map((league, i) => {
      return (
        <div onClick={this.changeOneLeaguesMatches} className="league-tab" key={league.league_id}>
          <button className="league-btn" id={league.league_id}></button>
          <div className="league-tab-inner-container">
            <img src={league.logo} alt="league logo" className="league-tab-logo" />
            <h4 className="league-tab-name">{league.name}</h4>
          </div>
        </div>
      )
    })

   


    return (
      <main className="main">
        <section className="league-tabs-container">
          {leagueTab}
        </section>
        <section>

        </section>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  premierLeague: state.premierLeague,
  league1: state.league1,
  championsLeague: state.championsLeague,
  bundesliga1: state.bundesliga1,
  primeraDivision: state.primeraDivision,
  selectedLeague: state.selectedLeague
})

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handlePremierLeague: data => dispatch(setPremierLeague(data)),
  handleLeague1: data => dispatch(setLeague1(data)),
  handleChampionsLeague: data => dispatch(setChampionsLeague(data)),
  handleBundesliga1: data => dispatch(setBundesliga1(data)),
  handlePrimeraDivision: data => dispatch(setPrimeraDivision(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(League)
