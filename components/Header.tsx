import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from '../styles/Header.module.css';

interface HeaderProps {
  onSettingsClick?: () => void;
}

export default function Header({ onSettingsClick }: HeaderProps) {
  const { data: session } = useSession();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Welcome, {session?.user?.name || 'Guest'}</h1>
        <p className={styles.time}>{time}</p>
      </div>
      <button className={styles.settingsBtn} onClick={onSettingsClick}>
        ⚙️
      </button>
    </header>
  );
}
