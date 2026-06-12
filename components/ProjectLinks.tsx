import React from 'react'

export default function ProjectLinks() {
  const projects = [
    { name: 'XeoTrack', url: 'https://xeotrack.vercel.app/', desc: 'Financial Planner' },
    { name: 'Home App', url: 'https://home-hazel-delta.vercel.app/', desc: 'Personal Dashboard' },
    { name: 'GitHub', url: 'https://github.com/EWilliamHertz', desc: 'My Repositories' },
  ]

  return (
    <section className="project-links">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
