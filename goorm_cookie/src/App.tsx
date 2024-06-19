import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import C_Room from './pages/C_Room/C_Room';
import HomePage from './pages/HomePage';
import Dashboard from './pages/dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/c_room" element={<C_Room />} />
        <Route path="/room/:roomId/:lang" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

