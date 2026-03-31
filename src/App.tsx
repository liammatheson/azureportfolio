import React from 'react';
import './App.css';
import Header from './components/Header';
import WeekCard from './components/WeekCard';
import PortfolioCard from './components/PortfolioCard';

function App() {
  return (
    <div>
      <Header />

      <main>
        {/* <section className="hero">
          <h2>Liam's Azure Portfolio</h2>
        </section> */}

        <section id="weeks">
          <h3>Weekly Reflections</h3>
          <WeekCard week={1} notes="Learned Azure basics and cloud concepts." />
          <WeekCard week={2} notes="Explored Azure portal and deployment." />
        </section>

        <section id="portfolio">
          <h3>Portfolio Highlights</h3>
          <PortfolioCard
            title="React + Azure Demo"
            description="Minimal React portfolio deployed on Azure Static Web Apps."
            link="https://your-azure-site-url"
          />
        </section>
      </main>

      <footer>
        <p>©2024 HAROLD'S TECHNOLOGY PORTFOLIO</p>
      </footer>
    </div>
  );
}

export default App;