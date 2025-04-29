import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NEOMProject from './pages/NEOMProject';
import MarketAnalysis from './pages/MarketAnalysis';
import OurOffer from './pages/OurOffer';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neom-project" element={<NEOMProject />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
          <Route path="/our-offer" element={<OurOffer />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;