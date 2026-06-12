import React from 'react'
import Header from '../components/Header'
import ProjectLinks from '../components/ProjectLinks'
import CalendarWidget from '../components/CalendarWidget'
import QuickLinks from '../components/QuickLinks'
import CommandCard from '../components/CommandCard'

export default function Home() {
  return (
    <main className="container">
      <Header />
      <ProjectLinks />
      <CalendarWidget />
      <CommandCard />
      <QuickLinks />
    </main>
  )
}
