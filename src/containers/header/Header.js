import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo.png';
import './header.css';
import { setTodaysMatches, setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision } from '../../actions';
import { fetchTodaysMatches, fetchOneLeaguesMatches } from '../../apiCalls';
import ballIcon from '../../images/ball-icon.png';


class Header extends Component {
  
  changeTodaysDate = e => {
    fetchTodaysMatches(e.target.value).then(data => this.props.handleTodaysMatches(data.api.fixtures))
  }

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
  }
  

  render() {
    const league = this.props.leaguesData.map((league, i) => {
      const logo = i === 0 ? ballIcon : league.logo
      return (
        <div onClick={this.changeOneLeaguesMatches} className="league-tab" key={league.league_id}>
          <button className="league-btn" id={league.league_id}></button>
          <div className="league-tab-inner-container">
            <img src={logo} alt="league logo" className="league-tab-logo" />
            <h4 className="league-tab-name">{league.name}</h4>
          </div>
        </div>
      )
    })

    return (
      <header>
        <img className="logo" src={logo} alt="football time logo" />
        <section className="header-tabs-container">
            <div className="league-tabs-container">
               {league}
            </div>
            <div>
              <input type="date" onChange={this.changeTodaysDate}/>
            </div>
        </section>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  premierLeague: state.premierLeague,
  league1: state.league1,
  championsLeague: state.championsLeague,
  bundesliga1: state.bundesliga1,
  primeraDivision: state.primeraDivision
})

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handlePremierLeague: data => dispatch(setPremierLeague(data)),
  handleLeague1: data => dispatch(setLeague1(data)),
  handleChampionsLeague: data => dispatch(setChampionsLeague(data)),
  handleBundesliga1: data => dispatch(setBundesliga1(data)),
  handlePrimeraDivision: data => dispatch(setPrimeraDivision(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
