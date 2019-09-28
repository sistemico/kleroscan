import React from 'react'

import { useSubscription } from '@apollo/react-hooks'

import Overlay from '../../components/Overlay'
import Branding from '../../components/Branding'

import DisputeTable from './DisputeTable'

import { ALL_DISPUTES_QUERY } from '../../queries/disputes'

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
