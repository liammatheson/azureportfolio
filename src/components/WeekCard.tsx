import React from 'react';

interface WeekCardProps {
  week: number;
  notes: string;
  icon?: string;
}

export default function WeekCard({ week, notes, icon = "" }: WeekCardProps) {
  return (
    <div className="week-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
        <h4>Week {week}</h4>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p>{notes}</p>
    </div>
  );
}