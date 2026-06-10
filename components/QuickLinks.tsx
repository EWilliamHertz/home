import React from 'react';

export default function QuickLinks() {
  const links = [
    { name: 'Gmail', url: 'https://gmail.com', icon: '✉️' },
    { name: 'Google', url: 'https://google.com', icon: '🔍' },
    { name: 'Google Docs', url: 'https://docs.google.com', icon: '📄' },
    { name: 'Titan Mail', url: 'https://app.titan.email/mail/', icon: '📮' },
  ];

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      {links.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
}
