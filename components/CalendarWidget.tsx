import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css';

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth(currentDate); i++) {
    days.push(i);
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}>←</button>
        <h3>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h3>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}>→</button>
      </div>
      <div className={styles.grid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className={styles.dayHeader}>{d}</div>
        ))}
        {days.map((day, i) => (
          <div key={i} className={styles.day}>{day}</div>
        ))}
      </div>
    </div>
  );
}
