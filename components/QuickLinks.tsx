import React from 'react'

export default function QuickLinks() {
  const links = [
    { name: 'Gmail', url: 'https://mail.google.com/', icon: '📧' },
    { name: 'Google', url: 'https://google.com/', icon: '🔍' },
    { name: 'Google Docs', url: 'https://docs.google.com/', icon: '📄' },
    { name: 'Titan Mail', url: 'https://titan.email/', icon: '📨' },
    { name: 'Cloud Shell IDE', url: 'https://console.cloud.google.com/cloudshell', icon: '💻' },
  ]

  return (
    <section className="quick-links">
      <h2>Quick Links</h2>
      <div className="links-grid">
        {links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="quick-link">
            <span className="icon">{link.icon}</span>
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
