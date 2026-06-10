import React, { useState } from 'react';

export default function CommandCard() {
  const [copied, setCopied] = useState(false);
  const command = 'cd chicago-tracker && npm run dev -- --host';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem' }}>🚀 Track Your Chicago League</h3>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <code style={{
          flex: 1,
          background: 'rgba(0,0,0,0.3)',
          padding: '0.75rem',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
          overflow: 'auto',
          color: '#10b981'
        }}>
          {command}
        </code>
        <button
          onClick={handleCopy}
          style={{
            padding: '0.75rem 1rem',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
