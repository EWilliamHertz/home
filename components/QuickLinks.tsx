import React from 'react';
import { Mail, Search, BookOpen, Zap, Terminal, Code2 } from 'lucide-react';

interface QuickLink {
  icon: React.ReactNode;
  label: string;
  url: string;
  color: string;
}

export const QuickLinks: React.FC = () => {
  const links: QuickLink[] = [
    {
      icon: <Mail size={20} />,
      label: 'Gmail',
      url: 'https://gmail.com',
      color: 'badge-primary',
    },
    {
      icon: <Search size={20} />,
      label: 'Google',
      url: 'https://google.com',
      color: 'badge-secondary',
    },
    {
      icon: <Code2 size={20} />,
      label: 'Titan Mail',
      url: 'https://app.titan.email/mail/',
      color: 'badge-info',
    },
    {
      icon: <Terminal size={20} />,
      label: 'Cloud Shell',
      url: 'https://shell.cloud.google.com/?show=ide%2Cterminal',
      color: 'badge-success',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-base-content mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 hover:bg-base-300 transition-all cursor-pointer border border-base-300 hover:border-primary/50"
          >
            <div className="card-body p-4">
              <div className="flex flex-col items-center gap-2">
                <div className="text-primary">{link.icon}</div>
                <p className="text-sm font-medium text-center text-base-content">
                  {link.label}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
