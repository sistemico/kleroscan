import { gql } from 'apollo-boost'

export const ALL_DISPUTES_QUERY = gql`
  query recentDisputes($count: Int = 1000) {
    disputes(first: 1000, orderBy: created, orderDirection: desc) {
      id
      court {
        id
        name
      }
      period
      owner
      created
      modified
    }
  }
`

export const RECENT_DISPUTES_QUERY = gql`
  query recentDisputes {
    disputes(first: 15, orderBy: modified, orderDirection: desc) {
      id
      court {
        id
        name
      }
      period
      owner
      created
      modified
    }
  }
`
