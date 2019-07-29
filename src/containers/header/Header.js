import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../images/football-time-logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';


export class Header extends Component {

  render() {

    return (
      <header>
        <img className="logo" src={logo} alt="football time logo" />
        <section className="header-tabs-container" >
          <div className="nav-btn-container">
          <NavLink to="/todaysmatches" className="all-leagues-tab">
              Today's Matches
            </NavLink>
          <NavLink to="/leagues/524" className="one-league-tab">
              Leagues
            </NavLink>
          </div>
        </section>
      </header>
    )
  }
}

Header.propTypes = {
  leaguesData : PropTypes.array,
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
})


export default connect(mapStateToProps, null)(Header)
