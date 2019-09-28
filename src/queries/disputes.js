import { gql } from 'apollo-boost'

export const ALL_DISPUTES_QUERY = gql`
  query allDisputes {
    disputes(first: 1000, orderBy: created, orderDirection: desc) {
      id
      court {
        id
        name
      }
      period
      owner
      voteCount
      created
      modified
      numberOfChoices
      lastPeriodChange
    }
  }
`

export const RECENT_DISPUTES_QUERY = gql`
  query recentDisputes {
    disputes(first: 5, orderBy: modified, orderDirection: desc) {
      id
      court {
        id
        name
      }
      period
      owner
      voteCount
      created
      modified
      numberOfChoices
      lastPeriodChange
    }
  }
`

export const GET_DISPUTE_DETAIL_QUERY = gql`
  query getDispute($id: String) {
    dispute(id: $id) {
      id
      court {
        id
        name
      }
      period
      owner
      voteCount
      created
      modified
      votes {
        juror {
          address
        }
        round
        voteId
        created
      }
    }
  }
`
