import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import FormHero from './components/hero/FormHero';
import RecentEvent from './components/RecentEvent';
import UncomingEvent from './components/UncomingEvent';
import Galeries from './components/Galeries';
import Merchandise from './components/Merchandise';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="image-wrapper">
    <Hero />
    </div>
    <FormHero />
    <RecentEvent />
    <UncomingEvent />
    <Galeries />
    <Merchandise />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
