import React from 'react';

export default function ProjectLinks() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      {/* XeoTrack */}
      <a href="https://xeotrack.vercel.app/" target="_blank" rel="noopener noreferrer"
        style={{ 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
          borderRadius: '0.75rem',
          textDecoration: 'none',
          color: 'white',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>XeoTrack</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Financial Planner</div>
      </a>

      {/* Home App */}
      <a href="https://home-hazel-delta.vercel.app/" target="_blank" rel="noopener noreferrer"
        style={{ 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', 
          borderRadius: '0.75rem',
          textDecoration: 'none',
          color: 'white',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Home App</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Personal Dashboard</div>
      </a>

      {/* Google Cloud Shell */}
      <a href="https://shell.cloud.google.com/?show=ide%2Cterminal" target="_blank" rel="noopener noreferrer"
        style={{ 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
          borderRadius: '0.75rem',
          textDecoration: 'none',
          color: 'white',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Cloud Shell</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Code Editor & Terminal</div>
      </a>

      {/* GitHub */}
      <a href="https://github.com/EWilliamHertz/home" target="_blank" rel="noopener noreferrer"
        style={{ 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', 
          borderRadius: '0.75rem',
          textDecoration: 'none',
          color: 'white',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>GitHub</div>
        <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Source Code</div>
      </a>
    </div>
  );
}
