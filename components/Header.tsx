import React, { useState, useEffect } from 'react';

export default function Header() {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      
      setTime(`${timeStr} — ${dateStr}`);
      
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 17) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '0.5rem' }}>{greeting}</h1>
      <p style={{ fontSize: '0.95rem', opacity: 0.6 }}>{time}</p>
    </header>
  );
}
