import React from 'react';

interface BandScoreBadgeProps {
  score: number | string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BandScoreBadge: React.FC<BandScoreBadgeProps> = ({ score, label = 'Band', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg font-semibold'
  };

  return (
    <div className={`inline-flex items-baseline gap-1.5 font-mono-tabular ${sizeClasses[size]}`}>
      <span className="text-slate-500 font-normal">{label}</span>
      <span className="font-semibold text-slate-900">{typeof score === 'number' ? score.toFixed(1) : score}</span>
    </div>
  );
};
