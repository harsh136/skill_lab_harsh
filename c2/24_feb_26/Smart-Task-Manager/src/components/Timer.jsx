import React from 'react'
import { useState, useEffect } from 'react'
function Timer() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>App Running Time: {seconds} seconds</div>
  )
}

export default Timer