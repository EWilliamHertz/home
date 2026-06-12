import React, { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Header from '../components/Header';
import ProjectLinks from '../components/ProjectLinks';
import CalendarWidget from '../components/CalendarWidget';
import QuickLinks from '../components/QuickLinks';
import CommandCard from '../components/CommandCard';
import SettingsPanel from '../components/SettingsPanel';
import styles from '../styles/Home.module.css';

interface PanelConfig {
  id: string;
  name: string;
  visible: boolean;
}

const PANEL_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  header: Header,
  projectlinks: ProjectLinks,
  calendar: CalendarWidget,
  quicklinks: QuickLinks,
  commandcard: CommandCard,
};

export default function Home() {
  const { data: session } = useSession();
  const [showSettings, setShowSettings] = useState(false);
  const [panels, setPanels] = useState<PanelConfig[]>([
    { id: 'header', name: 'Header', visible: true },
    { id: 'projectlinks', name: 'Project Links', visible: true },
    { id: 'calendar', name: 'Calendar', visible: true },
    { id: 'quicklinks', name: 'Quick Links', visible: true },
    { id: 'commandcard', name: 'Command Card', visible: true },
  ]);

  useEffect(() => {
    if (session) {
      fetchSettings();
    }
  }, [session]);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      if (response.ok) {
        const savedPanels = await response.json();
        setPanels((prevPanels) =>
          prevPanels.map((panel) => {
            const saved = savedPanels.find((p: any) => p.panel_name === panel.name);
            return saved ? { ...panel, visible: saved.visible } : panel;
          })
        );
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    }
  };

  const handleSettingsSave = async (updatedPanels: PanelConfig[]) => {
    try {
      await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ panels: updatedPanels }),
      });
      setPanels(updatedPanels);
      setShowSettings(false);
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Header onSettingsClick={() => setShowSettings(true)} />
      
      {showSettings && (
        <SettingsPanel
          panels={panels}
          onSave={handleSettingsSave}
          onClose={() => setShowSettings(false)}
        />
      )}

      <div className={styles.content}>
        {panels.filter((p) => p.visible).map((panel) => {
          const Component = PANEL_COMPONENTS[panel.id];
          return (
            <div key={panel.id} className={styles.panel}>
              {Component && <Component />}
            </div>
          );
        })}
      </div>

      {!session && (
        <div className={styles.auth}>
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
}
