import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Match from '../../components/match/Match';

export class MatchesContainer extends Component {
  
  render() {
    const {id, todaysMatches} = this.props
    const filterMatchesPerLeague = todaysMatches.filter(match => 
       match.league_id === id
    )

    const match = filterMatchesPerLeague.map(match => {
      return (
        <Match key={match.fixture_id} match={match}/>
      )
    })
    return (
      <div>
        {match}
      </div>
    )
  }
}

MatchesContainer.propTypes = {
  todaysMatches: PropTypes.array
}

export const mapStateToProps = state => ({
  todaysMatches: state.todaysMatches,
})

export default connect(mapStateToProps, null)(MatchesContainer)
