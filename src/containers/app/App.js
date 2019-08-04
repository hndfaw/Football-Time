import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodaysMatches, fetchLeagues, fetchOneLeaguesMatches } from '../../apiCalls';
import { setTodaysMatches, leaguesAction, setPremierLeague} from '../../actions';
import  Header  from '../header/Header';
import  TodaysMatches  from '../todaysMatches/TodaysMatches';
import { Route, Switch, NavLink } from 'react-router-dom';
import Leagues from '../leagues/Leagues';
import Home from '../../components/home/Home';
import loading from '../../images/loading.gif';
import MatchDetail from '../../components/matchDetail/MatchDetail';


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
    fetchTodaysMatches(this.today()).then(data => {
      const cleanedData = this.cleanMatches(data.api.fixtures)
      this.props.handleTodaysMatches(cleanedData)
    })

    fetchLeagues().then(data =>
      this.props.handleLeagues(data.api.leagues))

      fetchOneLeaguesMatches(524).then(data => {
        const cleanedData = this.cleanMatches(data.api.fixtures)
        this.props.handlePremierLeague(cleanedData)
      })
  }


  cleanMatches = data => {
    const cleanedData = data.map(match => {

      const date = match.event_date.split("").slice(0, 10).join("")
        return {
          event_date: date,
          league_id: match.league_id,
          statusShort: match.statusShort,
          fixture_id: match.fixture_id,
          homeTeamName: match.homeTeam.team_name,
          homeTeamLogo: match.homeTeam.logo,
          awayTeamName: match.awayTeam.team_name,
          awayTeamLogo: match.awayTeam.logo,
          elapsed: match.elapsed,
          goalsHomeTeam: match.goalsHomeTeam,
          goalsAwayTeam: match.goalsAwayTeam,
          status: match.status
        }
      })
      return cleanedData;
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
                <TodaysMatches cleanMatches={this.cleanMatches}/>
            )} />
            <Route exact path="/leagues/524" render={() => (
                <Leagues matches={this.props.league524} />
                )} />
            <Route exact path="/leagues/525" render={() => (
                <Leagues matches={this.props.league525}  />
                )} />
            <Route exact path="/leagues/530" render={() => (
                <Leagues matches={this.props.league530}  />
                )} />
            <Route exact path="/leagues/754" render={() => (
                <Leagues matches={this.props.league754}  />
                )} />
            <Route exact path="/leagues/775" render={() => (
                <Leagues matches={this.props.league775}  />
                )} />
            <Route exact path='/todaysmatches/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.todaysMatches.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
            <Route exact path='/leagues/524/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.league524.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
            <Route exact path='/leagues/525/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.league525.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
            <Route exact path='/leagues/530/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.league530.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
            <Route exact path='/leagues/754/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.league754.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
            <Route exact path='/leagues/775/:fixture_id' render={({ match}) => {
              const { fixture_id } = match.params;
              const foundMatch = this.props.league775.find(match => match.fixture_id === Number(fixture_id));
              return <MatchDetail {...foundMatch}/>
            }}/>
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
  league524 : PropTypes.array,
  league525 : PropTypes.array,
  league530 : PropTypes.array,
  league754 : PropTypes.array,
  league775 : PropTypes.array,
}

export const mapStateToProps = state => ({
  todaysMatches: state.todaysMatches,
  league524: state.league524,
  league525: state.league525,
  league530: state.league530,
  league754: state.league754,
  league775: state.league775,
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data)),
  handlePremierLeague: data => dispatch(setPremierLeague(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);