import React, { Component } from 'react';
import { connect } from 'react-redux';
import Match from '../../components/match/Match'

export class MatchContainer extends Component {
  
  render() {
    const {id, todaysMatches} = this.props
    const filterMatchesPerLeague = todaysMatches.filter(match => 
       match.league_id === id
    )

    const match = filterMatchesPerLeague.map((match, i) => {
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

export const mapStateToProps = state => ({
  todaysMatches: state.todaysMatches,
})

export default connect(mapStateToProps, null)(MatchContainer)
