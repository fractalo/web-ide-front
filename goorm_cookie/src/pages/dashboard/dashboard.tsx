import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/codeEditor';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatComponent from '../../components/ChatComponent/ChatComponent'; 


const Dashboard: React.FC = () => {
  const { roomId, lang } = useParams<{ roomId: string; lang: string }>();

  return (
      <div>
          <Header />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
              <div style={{ flex: 1 }}>
                  {roomId && lang && <CodeEditor roomId={roomId} language={lang} />}
              </div>
              <div style={{ width: '300px', padding: '20px' }}> 
                  <ChatComponent /> 
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default Dashboard;
