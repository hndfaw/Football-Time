import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
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
    const { todaysMatches, selectedLeague } = this.props
    const x = this.props[selectedLeague].length === 0;
    console.log(x)
    return (
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route exact path="/todaysmatches" render={() => (
                todaysMatches.length === 0 ?
                <img src={loading} alt="loading icon" /> :
                <TodaysMatches />
            )} />
            <Route exact path="/leagues" render={() => (
                x ?
                <img src={loading} alt="loading icon" /> :
                <Leagues/>

                )} />
            <Route render={() => (
              <>
                <p className="page-not-exist">The page you’re looking for can’t be found.</p><NavLink to="/" className="back-to-homepage"> Back to Homepage</NavLink>
              </>
            )}/>
          </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  oneDayDate: state.oneDayDate,
  todaysMatches: state.todaysMatches,
  league524: state.league524,
  league525: state.league525,
  league530: state.league530,
  league754: state.league754,
  league775: state.league775,
  selectedLeague: state.selectedLeague
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
