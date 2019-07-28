import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';
import { fetchTodaysMatches } from '../../apiCalls';
import { setTodaysMatches } from '../../actions';




export class Header extends Component {

  changeTodaysDate = e => {
    fetchTodaysMatches(e.target.value).then(data => this.props.handleTodaysMatches(data.api.fixtures))
  }
  

  render() {

    return (
      <header>
        <img className="logo" src={logo} alt="football time logo" />
        <section className="header-tabs-container" >
          <div className="nav-btn-container">
          <NavLink to="/todaysmatches" className="all-leagues-tab">
              Today's Matches
            </NavLink>
          <NavLink to="/leagues" className="one-league-tab">
              Leagues
            </NavLink>
          </div>
        </section>
           <input className="pickup-a-date" type="date" onChange={this.changeTodaysDate}/>
      </header>
    )
  }
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
})



export default connect(mapStateToProps, mapDispatchToProps)(Header)
