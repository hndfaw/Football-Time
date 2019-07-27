import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo-3.png';
import './header.css';
import { setTodaysMatches, setOneLeagueMatches } from '../../actions';
import { fetchTodaysMatches, fetchOneLeaguesMatches } from '../../apiCalls';


class Header extends Component {
  
  changeTodaysDate = e => {
    fetchTodaysMatches(e.target.value).then(data => this.props.handleTodaysMatches(data.api.fixtures))
  }

  chaneOneLeaguesMatches = () => {
    fetchOneLeaguesMatches(524).fetch(data => console.log(data))
    this.props.handleSetOneLeagueMatches()
  }
  

  render() {
    const league = this.props.leaguesData.map(league => {
      return (
        <div className="league-tab" key={league.league_id}>
          <h4 className="league-tab-name">{league.name}</h4>
          <img src={league.logo} alt="league logo" className="league-tab-logo" />
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
  leagueMatches: state.leagueMatches,
  leaguesData: state.leaguesData
})

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleSetOneLeagueMatches: data => dispatch(setOneLeagueMatches(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
