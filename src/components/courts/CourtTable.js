import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Message from '../Message'
import Pill from '../Pill'

const CourtTable = ({ data: rootCourt }) => {
  const courts = useMemo(() => {
    if (!rootCourt) {
      return []
    } else {
      return [{ level: 0, ...rootCourt }, ...flattenCourts(rootCourt.subcourts)]
    }
  }, [rootCourt])

  const totalDisputes = useMemo(() => {
    return courts.reduce((total, { disputeCount }) => {
      total += parseInt(disputeCount)

      return total
    }, 0)
  }, [courts])

  return !courts.length ? (
    <Message>No courts to show</Message>
  ) : (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Disputes</th>
            <th>Min Stake</th>
            <th>Fee for Juror</th>
            <th>Alpha</th>
          </tr>
        </thead>
        <tbody>
          {courts.map(court => (
            <tr key={`court-${court.id}`}>
              <td>
                <Link to={`/court/${court.id}`} title={`View details of ${court.name}`}>
                  <Pill>{court.id}</Pill>
                </Link>
              </td>
              <td>
                <Link to={`/court/${court.id}`} title={`View details of ${court.name}`}>
                  {'—'.repeat(court.level)} {court.name}
                </Link>
              </td>
              <td>
                <span>{court.disputeCount}</span>
              </td>
              <td>
                <span>{court.minStake}</span>
              </td>
              <td>
                <span>{court.feeForJuror}</span>
              </td>
              <td>
                <span>{court.alpha}</span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total disputes</td>
            <td>{totalDisputes}</td>
            <td colSpan={3} />
          </tr>
        </tfoot>
      </table>
    </Container>
  )
}

const Container = styled.div`
  table {
    tbody {
      td:nth-child(2) {
        font-weight: normal;
        text-align: left;
      }
    }

    tfoot {
      td:first-child {
        text-align: right;
      }
    }
  }
`

function flattenCourts(courts, parentLevel = 0) {
  const level = parentLevel + 1

  if (!courts) {
    return []
  }

  return courts.reduce((all, court) => {
    return [...all, { level, ...court }, ...flattenCourts(court.subcourts, level)]
  }, [])
}

export default CourtTable
