import React from 'react'
import { Link } from 'react-router-dom'

import Message from '../Message'
import Pill from '../Pill'
import Period from '../formatters/Period'
import Timestamp from '../formatters/Timestamp'

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
          <th>Period</th>
          <th>Created</th>
          <th>Last Modified</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(dispute => (
          <tr key={`dispute-${dispute.id}`}>
            <td>
              <Link to={`/dispute/${dispute.id}`} title={`View details of dispute #${dispute.id}`}>
                <Pill>{dispute.id}</Pill>
              </Link>
            </td>
            <td>
              <Link to={`/court/${dispute.court.id}`} title={`View details of court #${dispute.id}`}>
                <span>{dispute.court.name}</span>
              </Link>
            </td>
            <td>
              <Link to={`/juror/${dispute.owner}`}>
                <span>{dispute.owner}</span>
              </Link>
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
            <td>
              <span>-</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

export default DisputeTable
