import { gql } from 'apollo-boost'

export const ALL_COURTS_QUERY = gql`
  query allCourts {
    rootCourt: court(id: 0) {
      ...courtDescriptor
      subcourts: children(where: { id_not: 0 }) {
        ...subcourtHierarchy
      }
    }
  }

  fragment subcourtHierarchy on Court {
    ...courtDescriptor
    subcourts: children {
      ...courtDescriptor
      subcourts: children {
        ...courtDescriptor
        subcourts: children {
          ...courtDescriptor
          subcourts: children {
            ...courtDescriptor
            subcourts: children {
              ...courtDescriptor
            }
          }
        }
      }
    }
  }

  fragment courtDescriptor on Court {
    id
    name
    hiddenVotes
    minStake
    alpha
    feeForJuror
    disputeCount
  }
`
