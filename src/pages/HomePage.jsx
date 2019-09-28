import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import styled from 'styled-components'

import Branding from '../components/Branding'
import Message from '../components/Message'
import Overlay from '../components/Overlay'

import DisputeTable from './disputes/DisputeTable'
import JurorTable from './jurors/JurorTable'

import { RECENT_DISPUTES_QUERY } from '../queries/disputes'
import { TOP_STAKE_JURORS_QUERY } from '../queries/jurors'

const HomePage = () => {
  const { loadingDisputes, errorDisputes, data: { disputes } = {} } = useSubscription(RECENT_DISPUTES_QUERY)
  const { loadingJurors, errorJurors, data: { jurors } = {} } = useSubscription(TOP_STAKE_JURORS_QUERY)

  if (loadingDisputes || loadingJurors) {
    return (
      <Overlay>
        <Branding />
      </Overlay>
    )
  }

  if (errorDisputes || errorJurors) {
    return <Message>{(errorDisputes && errorDisputes.message) || (errorJurors && errorJurors.message)}</Message>
  }

  return (
    <Container>
      <Section>
        <h2>Recent Disputes</h2>
        <DisputeTable data={disputes} />
      </Section>

      <br />

      <Section>
        <h2>Top Jurors by staked tokens</h2>
        <JurorTable data={jurors} />
      </Section>
    </Container>
  )
}

const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--spacing-wide);
`

const Section = styled.section``

export default HomePage
