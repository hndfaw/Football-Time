import React from 'react';
import './matchDetail.css'

function MatchDetail({fixture_id}) {
  console.log(fixture_id)
  return (
    <div>
      <h1 className="text">{fixture_id}</h1>
    </div>
  )
}


export default  MatchDetail
