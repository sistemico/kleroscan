import React from 'react'
// import { Link } from 'react-router-dom'

import Message from '../../components/Message'
import Pill from '../../components/Pill'
import Period from '../../components/formatters/Period'
import Timestamp from '../../components/formatters/Timestamp'

const DisputeTable = ({ data }) =>
  !data || !data.length ? (
    <Message>No disputes to show</Message>
  ) : (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Court</th>
          <th>Owner</th>
          <th>Choices</th>
          <th>Votes</th>
          <th>Status</th>
          <th>Created</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        {data.map(dispute => (
          <tr key={`dispute-${dispute.id}`}>
            <td>
              {/*<Link to={`/dispute/${dispute.id}`} title={`View details of dispute #${dispute.id}`}>*/}
              <Pill>{dispute.id}</Pill>
              {/*</Link>*/}
            </td>
            <td>
              {/*<Link to={`/court/${dispute.court.id}`} title={`View details of ${dispute.court.name}`}>*/}
              <span>{dispute.court.name}</span>
              {/*</Link>*/}
            </td>
            <td>
              {/*<Link to={`/juror/${dispute.owner}`}>*/}
              <span>{dispute.owner}</span>
              {/*</Link>*/}
            </td>
            <td>
              <span>{dispute.numberOfChoices}</span>
            </td>
            <td>
              <span>{dispute.voteCount}</span>
            </td>
            <td>
              <Period value={dispute.period} />
            </td>
            <td>
              <Timestamp value={dispute.created} addSuffix={true} />
            </td>
            <td>
              <Timestamp value={dispute.modified} addSuffix={true} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

export default DisputeTable
