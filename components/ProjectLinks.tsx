import React from 'react';
import { ExternalLink, TrendingUp, Github } from 'lucide-react';
import { CommandCard } from './CommandCard';

export const ProjectLinks: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-base-content mb-4">Projects</h2>
      
      {/* Home App */}
      <a
        href="https://home-hazel-delta.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
      >
        <div className="card-body">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-primary" size={24} />
                <h3 className="card-title text-xl">Home App</h3>
              </div>
              <p className="text-base-content/70 text-sm mb-3">
                Personal dashboard & tools
              </p>
            </div>
            <ExternalLink className="text-primary/60" size={20} />
          </div>
          <div className="flex gap-2">
            <span className="badge badge-primary badge-sm">Dashboard</span>
            <span className="badge badge-primary badge-outline badge-sm">Live</span>
          </div>
        </div>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/EWilliamHertz/home"
        target="_blank"
        rel="noopener noreferrer"
        className="block card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20 cursor-pointer"
      >
        <div className="card-body">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Github className="text-secondary" size={24} />
                <h3 className="card-title text-xl">GitHub</h3>
              </div>
              <p className="text-base-content/70 text-sm mb-3">
                Home app source code
              </p>
            </div>
            <ExternalLink className="text-secondary/60" size={20} />
          </div>
          <div className="flex gap-2">
            <span className="badge badge-secondary badge-sm">Repository</span>
            <span className="badge badge-secondary badge-outline badge-sm">Open Source</span>
          </div>
        </div>
      </a>

      {/* Chicago Tracker Command */}
      <CommandCard
        title="Track Your Chicago League"
        command="cd chicago-tracker && npm run dev -- --host"
      />
    </div>
  );
};
