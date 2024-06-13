import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Inpopage from './pages/InfoPage';
import ForgotPassPage from './pages/ForgotPassPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/info" element={<Inpopage />} />
                <Route path="/forgot-password" element={<ForgotPassPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
