import styles from '../styles/QuickLinks.module.css';

export default function QuickLinks() {
  const links = [
    { icon: '📧', name: 'Gmail', url: 'https://mail.google.com' },
    { icon: '🔍', name: 'Google', url: 'https://google.com' },
    { icon: '📄', name: 'Google Docs', url: 'https://docs.google.com' },
    { icon: '☁️', name: 'Cloud Shell', url: 'https://shell.cloud.google.com' },
  ];

  return (
    <div className={styles.card}>
      <h2>Quick Links</h2>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.icon}>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
