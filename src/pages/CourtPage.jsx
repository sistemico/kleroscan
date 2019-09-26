import React from 'react'

const CourtPage = ({ match: { params } }) => (
  <>
    <h2>Court {params.courtId}</h2>
  </>
)

export default CourtPage
