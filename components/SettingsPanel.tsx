import React, { useState } from 'react';
import styles from '../styles/SettingsPanel.module.css';

interface SettingsPanelProps {
  panels: any[];
  onSave: (panels: any[]) => void;
  onClose: () => void;
}

export default function SettingsPanel({ panels, onSave, onClose }: SettingsPanelProps) {
  const [items, setItems] = useState(panels);
  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItem !== null && draggedItem !== index) {
      const newItems = [...items];
      [newItems[draggedItem], newItems[index]] = [newItems[index], newItems[draggedItem]];
      setDraggedItem(index);
      setItems(newItems);
    }
  };

  const toggleVisibility = (index: number) => {
    const newItems = [...items];
    newItems[index].visible = !newItems[index].visible;
    setItems(newItems);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <h2>Customize Dashboard</h2>
        <div className={styles.itemsList}>
          {items.map((item, index) => (
            <div
              key={item.id}
              className={styles.item}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
            >
              <span className={styles.dragHandle}>⋮⋮</span>
              <span>{item.name}</span>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={item.visible}
                  onChange={() => toggleVisibility(index)}
                />
                {item.visible ? 'Visible' : 'Hidden'}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <button onClick={() => onSave(items)} className={styles.saveBtn}>
            Save Changes
          </button>
          <button onClick={onClose} className={styles.closeBtn}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
