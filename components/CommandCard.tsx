import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CommandCardProps {
  title: string;
  command: string;
}

export const CommandCard: React.FC<CommandCardProps> = ({ title, command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
      <div className="card-body">
        <h3 className="card-title text-lg mb-3 text-accent flex items-center gap-2">
          🚀 {title}
        </h3>
        <div className="bg-base-300 rounded-lg p-3 font-mono text-sm text-base-content mb-3 break-all">
          {command}
        </div>
        <button
          onClick={handleCopy}
          className="btn btn-sm btn-secondary gap-2 w-full"
        >
          {copied ? (
            <>
              <Check size={16} /> Copied!
            </>
          ) : (
            <>
              <Copy size={16} /> Copy Command
            </>
          )}
        </button>
      </div>
    </div>
  );
};
