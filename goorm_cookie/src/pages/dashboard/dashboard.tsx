import React, { useState } from 'react';
import './dashboard.css';
import CodeEditor from '../../components/codeEditor';
import { v4 as uuidv4 } from 'uuid';

const Dashboard: React.FC = () => {
  const [language, setLanguage] = useState('javasciprt')
  const roomId = uuidv4();

  return (
    <div className='code_Board_main'>
      <select id='language-select' value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>언어를 선택해 주세요</option>
          <option value='javascript'>JavaScript</option>
          <option value='java'>Java</option>
          <option value='python'>Python</option>
          <option value='cpp'>C/C++</option>
      </select>

      <div className="editor_container">
        <CodeEditor roomId={roomId} language={language}/>
      </div>
    </div>
  );
};

export default Dashboard;
