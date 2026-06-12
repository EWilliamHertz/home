import styles from '../styles/ProjectLinks.module.css';

export default function ProjectLinks() {
  const projects = [
    { name: 'XeoTrack', url: 'https://xeotrack.vercel.app/', desc: 'Financial Planner' },
    { name: 'Home App', url: 'https://home-hazel-delta.vercel.app/', desc: 'Personal Dashboard' },
    { name: 'GitHub', url: 'https://github.com/ewilliamhertz', desc: 'Code Repository' },
  ];

  return (
    <div className={styles.card}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj) => (
          <a key={proj.name} href={proj.url} target="_blank" rel="noopener noreferrer" className={styles.project}>
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
