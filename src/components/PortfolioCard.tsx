import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function PortfolioCard({ title, description, link }: PortfolioCardProps) {
  return (
    <>
        <div className="portfolio-card">
      <div className="image">
        <span className="material-symbols-outlined" style={{ fontSize: '6rem', color: 'rgba(0,0,255,0.25)' }}></span>
      </div>
      <div style={{ padding: '2rem' }}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
        <div className="portfolio-card">
      <div className="image">
        <span className="material-symbols-outlined" style={{ fontSize: '6rem', color: 'rgba(0,0,255,0.25)' }}></span>
      </div>
      <div style={{ padding: '2rem' }}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
    </>

  );
}