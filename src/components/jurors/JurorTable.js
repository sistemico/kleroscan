import React from 'react'
import { Link } from 'react-router-dom'

import Message from '../Message'
import Timestamp from '../formatters/Timestamp'

const JurorTable = ({ data }) =>
  !data || !data.length ? (
    <Message>No juror to show</Message>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Staked Tokens</th>
          <th>Last Block</th>
          <th>Last Stake</th>
        </tr>
      </thead>
      <tbody>
        {data.map(juror => (
          <tr key={`juror-${juror.address}`}>
            <td>
              {/*<Link to={`/jurors/${juror.address}`} title={`View details of juror #${juror.address}`}>*/}
              <span>{juror.address}</span>
              {/*</Link>*/}
            </td>
            <td>
              <span>{juror.stakedTokens} PNK</span>
            </td>
            <td>
              <span>{juror.lastStakeBlock}</span>
            </td>
            <td>
              <Timestamp value={juror.lastStake} addSuffix={true} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

export default JurorTable
