import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../images/football-time-logo.png';
import './header.css';
import { NavLink } from 'react-router-dom';


export class Header extends Component {
  
  render() {
    const { selectedLeague } = this.props;

    let selectedId = parseInt(selectedLeague.slice(6,9))

    return (
      <header>
        <img className="logo" src={logo} alt="football time logo" />
        <section className="header-tabs-container" >
          <div className="nav-btn-container">
          <NavLink to="/todaysmatches" activeClassName="nav-tab" className="all-leagues-tab">
              Today's Matches
            </NavLink>
          <NavLink to={`/leagues/${selectedId}`} activeClassName="nav-tab" className="one-league-tab">
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
  selectedLeague: PropTypes.string,
}

export const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
  selectedLeague: state.selectedLeague
})


export default connect(mapStateToProps, null)(Header)
