import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProjectLinks from '../components/ProjectLinks';
import CalendarWidget from '../components/CalendarWidget';
import QuickLinks from '../components/QuickLinks';
import CommandCard from '../components/CommandCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.projects}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <ProjectLinks />
        </section>
        <section className={styles.tools}>
          <div className={styles.toolColumn}>
            <h2 className={styles.sectionTitle}>Calendar</h2>
            <CalendarWidget />
          </div>
          <div className={styles.toolColumn}>
            <h2 className={styles.sectionTitle}>Quick Links</h2>
            <QuickLinks />
          </div>
        </section>
        <section className={styles.commands}>
          <h2 className={styles.sectionTitle}>Commands</h2>
          <CommandCard />
        </section>
      </main>
    </div>
  );
}
