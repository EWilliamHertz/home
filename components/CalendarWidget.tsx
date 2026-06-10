import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export const CalendarWidget: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const getDaysInMonth = (d: Date) => {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (d: Date) => {
    return new Date(d.getFullYear(), d.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(date);
  const firstDay = getFirstDayOfMonth(date);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };

  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const today = new Date();
  const isCurrentMonth =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth();

  const monthName = date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-primary" size={24} />
          <h3 className="card-title text-xl">Calendar</h3>
        </div>

        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <h4 className="text-lg font-semibold text-center flex-1">
            {monthName}
          </h4>
          <button
            onClick={nextMonth}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-base-content/60 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, idx) => {
            const isToday = isCurrentMonth && day === today.getDate();
            return (
              <div
                key={idx}
                className={`
                  aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                  ${day === null ? '' : 'hover:bg-base-300 transition-colors'}
                  ${
                    isToday
                      ? 'bg-primary text-primary-content font-bold'
                      : 'text-base-content'
                  }
                `}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Today indicator */}
        {isCurrentMonth && (
          <div className="mt-4 p-3 bg-base-300 rounded-lg text-center">
            <p className="text-sm text-base-content">
              Today: <span className="font-semibold">{today.getDate()}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
