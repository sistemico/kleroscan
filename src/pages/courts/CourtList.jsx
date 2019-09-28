import React from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Overlay from '../../components/Overlay'
import Branding from '../../components/Branding'
import CourtTable from '../../components/courts/CourtTable'

import { ALL_COURTS_QUERY } from '../../queries/courts'
import Message from '../../components/Message'

const CourtList = () => {
  const { loading, error, data: { rootCourt } = {} } = useSubscription(ALL_COURTS_QUERY)

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

  if (!rootCourt) {
    return <Message>No courts to show</Message>
  }

  return (
    <>
      <h2>All Courts</h2>
      <CourtTable data={rootCourt} />
    </>
  )
}

export default CourtList
