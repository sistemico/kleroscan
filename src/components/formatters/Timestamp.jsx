import React, { useMemo } from 'react'
import { format as formatDate, formatDistance } from 'date-fns'

import { useClock } from '../../utils/clock'

const DEFAULT_FORMAT = 'dd/MM/yyyy HH:mm'

const Timestamp = ({
  value,
  defaultValue = '-',
  format = DEFAULT_FORMAT,
  formatter = formatDistance,
  addSuffix = false,
}) => {
  const now = useClock()
  const date = useMemo(() => value * 1000, [value])
  const formatted = useMemo(() => formatter(date, now, { addSuffix }), [date, now, formatter, addSuffix])

  return <span title={formatDate(date, format)}>{value ? formatted : defaultValue}</span>
}

export default Timestamp
