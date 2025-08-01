import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import WebsitesPage from './pages/WebsitesPage';
import WhatsAppFloat from './components/WhatsAppFloat';

function AppWrapper() {

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
      </Routes>
      <WhatsAppFloat />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
