import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서는 'react-dom/client'를 사용
import App from './App'; // 'App' 컴포넌트를 불러옴

// HTML 파일에서 'root'라는 id를 가진 요소를 가져옴
const rootElement = document.getElementById('root');
if (rootElement) {
  // React 18의 새로운 API를 사용하여 root 생성
  const root = ReactDOM.createRoot(rootElement);
  // 'App' 컴포넌트를 'root' 요소에 렌더링
  root.render(<App />);
}
