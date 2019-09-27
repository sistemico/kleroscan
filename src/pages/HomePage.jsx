import React from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Branding from '../components/Branding'
import Overlay from '../components/Overlay'
import DisputeTable from '../components/disputes/DisputeTable'

import { RECENT_DISPUTES_QUERY } from '../queries/disputes'

const HomePage = () => {
  const { loading, error, data: { disputes = [] } = {} } = useSubscription(RECENT_DISPUTES_QUERY)

  if (loading) {
    return (
      <Overlay>
        <Branding />
      </Overlay>
    )
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <h2>Recent disputes</h2>
      <DisputeTable data={disputes} />
    </>
  )
}

export default HomePage
