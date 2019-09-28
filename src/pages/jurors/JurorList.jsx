import React from 'react'
import { useSubscription } from '@apollo/react-hooks'

import Overlay from '../../components/Overlay'
import Message from '../../components/Message'
import Branding from '../../components/Branding'
import JurorTable from '../../components/jurors/JurorTable'

import { RECENT_JURORS_QUERY } from '../../queries/jurors'

const JurorList = () => {
  const { loading, error, data: { jurors: recentJurors = [] } = {} } = useSubscription(RECENT_JURORS_QUERY)

  if (loading) {
    return (
      <Overlay>
        <Branding />
      </Overlay>
    )
  }

  if (error) {
    return <Message>{error.message}</Message>
  }

  return (
    <>
      <h2>Recent Stakes</h2>
      <JurorTable data={recentJurors} />
    </>
  )
}

export default JurorList
