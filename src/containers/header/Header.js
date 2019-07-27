import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo-4.png';
import './header.css';
// import { setTodaysMatches } from '../../actions';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  
 
  
  

  render() {
    

    return (
      <header>
        <img className="logo" src={logo} alt="football time logo" />
        <section className="header-tabs-container">
            <NavLink to="/">
              All Leagues
            </NavLink>
            <NavLink to="/league">
              One League
            </NavLink>
            
        </section>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  leaguesData: state.leaguesData,
})



export default connect(mapStateToProps, null)(Header)
