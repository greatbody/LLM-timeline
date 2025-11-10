import { useState, useEffect } from 'react';
import './CountUpTimer.css';

interface CountUpTimerProps {
  startDate: Date;
  title: string;
  description?: string;
  color?: string;
}

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
}

export function CountUpTimer({ startDate, title, description, color = '#646cff' }: CountUpTimerProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    years: 0,
    months: 0,
    days: 0
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();

      // Calculate years
      let years = now.getFullYear() - startDate.getFullYear();

      // Calculate months
      let months = now.getMonth() - startDate.getMonth();
      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate days
      let days = now.getDate() - startDate.getDate();
      if (days < 0) {
        months--;
        if (months < 0) {
          years--;
          months += 12;
        }
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }

      setTimeElapsed({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days)
      });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="count-up-timer" style={{ '--accent-color': color } as React.CSSProperties}>
      <div className="timer-header">
        <h2 className="timer-title">{title}</h2>
        {description && <p className="timer-description">{description}</p>}
      </div>

      <div className="timer-display">
        <div className="time-unit">
          <div className="time-value">{timeElapsed.years}</div>
          <div className="time-label">Year{timeElapsed.years !== 1 ? 's' : ''}</div>
        </div>

        <div className="time-unit">
          <div className="time-value">{timeElapsed.months}</div>
          <div className="time-label">Month{timeElapsed.months !== 1 ? 's' : ''}</div>
        </div>

        <div className="time-unit">
          <div className="time-value">{timeElapsed.days}</div>
          <div className="time-label">Day{timeElapsed.days !== 1 ? 's' : ''}</div>
        </div>
      </div>

      <div className="timer-footer">
        <small>Since {startDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</small>
      </div>
    </div>
  );
}