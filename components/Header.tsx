import React, { useState, useEffect } from 'react'

export default function Header() {
  const [time, setTime] = useState('')
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: true }))
      
      const hour = now.getHours()
      if (hour < 12) setGreeting('Good Morning')
      else if (hour < 18) setGreeting('Good Afternoon')
      else setGreeting('Good Evening')
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <h1>{greeting}, Ernst-William</h1>
        <div className="clock">{time}</div>
      </div>
    </header>
  )
}
