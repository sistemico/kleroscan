import { gql } from 'apollo-boost'

export const RECENT_JURORS_QUERY = gql`
  query recentJurors {
    jurors(orderBy: lastStake, orderDirection: desc) {
      address
      stakedTokens
      lastStake
      lastStakeBlock
      lastStakeTransaction
      stakes(orderBy: timestamp, orderDirection: desc) {
        timestamp
        amount
      }
    }
  }
`

export const TOP_STAKE_JURORS_QUERY = gql`
  query topStakeJurors {
    jurors(first: 5, orderBy: stakedTokens, orderDirection: desc) {
      address
      stakedTokens
      lastStake
      lastStakeBlock
      lastStakeTransaction
    }
  }
`
