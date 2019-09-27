import React from 'react'

const CourtDetail = ({ match: { params } }) => (
  <>
    <h2>Court {params.courtId}</h2>
  </>
)

export default CourtDetail
