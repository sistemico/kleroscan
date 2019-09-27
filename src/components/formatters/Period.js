import React, { useMemo } from 'react'

const Period = ({ value }) => {
  const period = useMemo(() => {
    switch (value) {
      case 'EVIDENCE':
        return 'Evidence'
      case 'COMMIT':
        return 'Commit'
      case 'VOTE':
        return 'Vote'
      case 'APPEAL':
        return 'Appeal'
      case 'EXECUTION':
        return 'Done'
      default:
        return '-'
    }
  }, [value])

  const description = useMemo(() => {
    switch (value) {
      case 'EVIDENCE':
        return 'Evidence can be submitted. This is also when drawing has to take place'
      case 'COMMIT':
        return 'Jurors commit a hashed vote. This is skipped for courts without hidden votes'
      case 'APPEAL':
        return 'Jurors reveal/cast their vote depending on whether the court has hidden votes or not'
      case 'VOTE':
        return 'The dispute can be appealed'
      case 'EXECUTION':
        return 'Tokens are redistributed and the ruling is executed'
      default:
        return ''
    }
  }, [value])

  return <span title={description}>{period}</span>
}

export default Period
