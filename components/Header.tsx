import React from 'react';

interface HeaderProps {
  currentTime: Date;
}

export const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  const hour = currentTime.getHours();
  let greeting = 'Good evening';
  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  }

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-2">
        {greeting}
      </h1>
      <p className="text-lg text-base-content/70 mb-1">{dateString}</p>
      <p className="text-2xl font-light text-primary">{timeString}</p>
    </div>
  );
};
