import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';

// import { Container } from './styles';

import Header from './components/Header'
import Profile from './pages/Profile'
import Repo from './pages/Repo'
// STATIC
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;