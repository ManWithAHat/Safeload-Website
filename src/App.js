import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import OurSolution from './pages/OurSolution';
import JoinPilot from './pages/JoinPilot';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solution" element={<OurSolution />} />
          <Route path="/join" element={<JoinPilot />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
