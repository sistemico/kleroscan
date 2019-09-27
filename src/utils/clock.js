import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

const TickContext = createContext(Date.now())

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

export const Clock = ({ interval = HOUR, children }) => {
  const [tick, setTick] = useState(Date.now())

  useInterval(() => setTick(Date.now()), interval)

  return <TickContext.Provider value={tick}>{children}</TickContext.Provider>
}

export function useClock() {
  return useContext(TickContext)
}

export function useInterval(callback, delay) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (delay !== null) {
      let id = setInterval(tick, delay)

      return () => clearInterval(id)
    }
  }, [delay])
}

export default Clock
