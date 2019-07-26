import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodaysMatches, fetchLeagues } from '../../apiCalls';
import { setTodaysMatches, leaguesAction } from '../../actions';
import  Header  from '../header/Header';
import  Leagues  from '../leagues/Leagues';

export class App extends Component {

  componentDidMount() {
    const date = this.props.oneDayDate
    fetchTodaysMatches(date).then(data =>
      this.props.handleTodaysMatches(data.api.fixtures))

    fetchLeagues().then(data =>
      this.props.handleLeagues(data.api.leagues))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Leagues />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  oneDayDate: state.oneDayDate
})

export const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data)),
  handleLeagues: data => dispatch(leaguesAction(data))

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
