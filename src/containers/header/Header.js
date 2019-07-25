import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/football-time-logo-2.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo} alt="football timelogo" />
        <section className="header-tabs-container">

        </section>
      </header>
    )
  }
}

export default connect(null,null)(Header)
