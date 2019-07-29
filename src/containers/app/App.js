import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodaysMatches, fetchLeagues, fetchOneLeaguesMatches } from '../../apiCalls';
import { setTodaysMatches, leaguesAction, setPremierLeague, setLeague1, setChampionsLeague, setBundesliga1, setPrimeraDivision, setSelectedLeague } from '../../actions';
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

      fetchOneLeaguesMatches(524).then(data => {
        const cleanedData = this.cleanMatches(data.api.fixtures)
        this.props.handlePremierLeague(cleanedData)
      })

      fetchOneLeaguesMatches(525).then(data => {
        const cleanedData = this.cleanMatches(data.api.fixtures)
        this.props.handleLeague1(cleanedData)
      })
  }

  // changeOneLeaguesMatches = e => {
  //   let id = parseInt(e.target.id)

  //   this.props.handleSelectedLeague(`league${id}`)

  //   this.props[`league${id}`].length === 0 ?

  //   fetchOneLeaguesMatches(id).then(data => {
  //     const cleanedData = this.cleanMatches(data.api.fixtures)
  //     if (id === 525) {
  //       this.props.handleLeague1(cleanedData)
  //     } else if (id === 530) {
  //       this.props.handleChampionsLeague(cleanedData)
  //     } else if (id === 754) {
  //       this.props.handleBundesliga1(cleanedData)
  //     } else {
  //       this.props.handlePrimeraDivision(cleanedData)
  //     }
  //   })
  //   .then(() => this.selectLeaguesData())
  //   : this.selectLeaguesData()
  // }

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
                <TodaysMatches />
            )} />
            <Route exact path="/524" render={() => (
                <Leagues x={this.props.league524} />
                )} />
            <Route exact path="/525" render={() => (
                <Leagues x={this.props.league525}  />
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
  handlePremierLeague: data => dispatch(setPremierLeague(data)),
  handleLeague1: data => dispatch(setLeague1(data)),
  handleChampionsLeague: data => dispatch(setChampionsLeague(data)),
  handleBundesliga1: data => dispatch(setBundesliga1(data)),
  handlePrimeraDivision: data => dispatch(setPrimeraDivision(data)),
  handleSelectedLeague: leagueName => dispatch(setSelectedLeague(leagueName))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
