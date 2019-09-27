import React from 'react'

import DisputeTable from '../../components/disputes/DisputeTable'
import { useSubscription } from '@apollo/react-hooks'

import { ALL_DISPUTES_QUERY } from '../../queries/disputes'
import Overlay from '../../components/Overlay'
import Branding from '../../components/Branding'

const DisputeList = () => {
  const { loading, error, data: { disputes = [] } = {} } = useSubscription(ALL_DISPUTES_QUERY)

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
      <h2>All Disputes</h2>
      <DisputeTable data={disputes} />
    </>
  )
}

export default DisputeList
