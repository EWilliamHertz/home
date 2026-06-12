import React, { useState } from 'react';
import styles from '../styles/CommandCard.module.css';

export default function CommandCard() {
  const [copied, setCopied] = useState(false);
  const command = 'cd chicago-tracker && npm run dev -- --host';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.card}>
      <h2>Track Your Chicago League</h2>
      <div className={styles.commandBox}>
        <code>{command}</code>
        <button onClick={handleCopy}>{copied ? '✓ Copied' : '📋 Copy'}</button>
      </div>
    </div>
  );
}
