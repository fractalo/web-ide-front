import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import C_Room from './pages/C_Room/C_Room';
import HomePage from './pages/HomePage';
import Dashboard from './pages/dashboard/dashboard';
import ReactDOM from 'react-dom/client';

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

const rootElement = document.getElementById('root');
if (rootElement) {
  // React 18의 새로운 API를 사용하여 root 생성
  const root = ReactDOM.createRoot(rootElement);
  // 'App' 컴포넌트를 'root' 요소에 렌더링
  root.render(<App />);
}


export default App;

