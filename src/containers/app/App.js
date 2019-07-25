import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTodaysMatches } from '../../apiCalls';
import { setTodaysMatches } from '../../actions';
import  Header  from '../header/Header'
import  MatchesContainer  from '../matchesContainer/MatchesContainer'

class App extends Component {

  componentDidMount() {
    fetchTodaysMatches().then(data =>
      this.props.handleTodaysMatches(data)
      )
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MatchesContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleTodaysMatches: data => dispatch(setTodaysMatches(data))
})

export default connect(null, mapDispatchToProps)(App);
