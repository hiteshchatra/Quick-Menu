import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import WebsitesPage from './pages/WebsitesPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import AdminApp from './admin/AdminApp';

function AppWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/websites" element={<WebsitesPage />} />
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
      {!isAdminRoute && <WhatsAppFloat />}
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
