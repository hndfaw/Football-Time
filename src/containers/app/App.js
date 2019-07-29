import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodaysMatches, fetchLeagues } from '../../apiCalls';
import { setTodaysMatches, leaguesAction } from '../../actions';
import  Header  from '../header/Header';
import  TodaysMatches  from '../todaysMatches/TodaysMatches';
import { Route, Switch, NavLink } from 'react-router-dom';
import Leagues from '../leagues/Leagues';
import Home from '../../components/home/Home';
import loading from '../../images/loading.gif'



export class App extends Component {

   today = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return (yyyy + '-' + mm + '-' + dd);
  }

  componentDidMount() {
    fetchTodaysMatches(this.today()).then(data =>
      this.props.handleTodaysMatches(data.api.fixtures))

    fetchLeagues().then(data =>
      this.props.handleLeagues(data.api.leagues))
  }

  render() {
    const { todaysMatches } = this.props
    const dataLoading = todaysMatches.length === 0
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/todaysmatches" render={() => (
                dataLoading ?
                <img src={loading} className="loading" alt="loading icon" /> :
                <TodaysMatches />
            )} />
            <Route exact path="/leagues" render={() => (
                <Leagues/>
                )} />
            <Route render={() => (
              <>
                <p className="page-not-exist">The page you’re looking for can’t be found.</p><NavLink to="/todaysmatches" className="back-to-homepage"> Back to Today's Matches</NavLink>
              </>
            )}/>
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
  todaysMatches : PropTypes.array,
}

export const mapStateToProps = state => ({
  todaysMatches: state.todaysMatches,
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
