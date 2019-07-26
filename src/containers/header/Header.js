import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo-3.png';
import './header.css';
import { setTodaysDate, setTodaysMatches } from '../../actions';
import { fetchTodaysMatches } from '../../apiCalls';



class Header extends Component {

  addDate = e => {
    this.props.handleAddDate(e.target.value)
    fetchTodaysMatches(e.target.value).then(data => this.cleanMatches(data))
  }

  cleanMatches = data => {
    const cleanedData = data.map(match => {
      const date = match.event_date.split("").slice(0, 10).join("")
      return {
        event_date: date,
        league_id: match.league_id,
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        statusShort: match.statusShort,
        fixture_id: match.fixture_id
      }
    })
    this.props.handleTodaysMatches(cleanedData)
  }

  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="football timelogo" />
        <section className="header-tabs-container">
            <input type="date" onChange={this.addDate}/>
        </section>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleAddDate: date => dispatch(setTodaysDate(date)),
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
})

export default connect(null,mapDispatchToProps)(Header)
