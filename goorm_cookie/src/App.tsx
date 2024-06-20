import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import C_Room from './pages/C_Room/C_Room';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import Dashboard from './pages/Dashboard/dashboard';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/c_room" element={<C_Room />} />
            <Route path="/room/:roomId/:lang" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;

