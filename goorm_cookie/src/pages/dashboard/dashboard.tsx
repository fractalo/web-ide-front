import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/codeEditor';
import Header from '../../components/Header';
import ChatComponent from '../../components/ChatComponent/ChatComponent'; 
import './dashboard.css';

const Dashboard: React.FC = () => {
  const { roomId, lang } = useParams<{ roomId: string; lang: string }>();

  return (
      <div>
          <Header />
          <div id="ide_main_board" style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <div style={{ flex: 1 }}>
                  {roomId && lang && <CodeEditor roomId={roomId} language={lang} />}
              </div>
              <div style={{ width: '300px', padding: '20px' }} id="vertical-line"> 
                  <ChatComponent /> 
              </div>
          </div>
      </div>
  );
};

export default Dashboard;
