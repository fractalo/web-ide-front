import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/codeEditor';
import Header from '../../components/Header';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { roomId, lang } = useParams<{ roomId: string; lang: string }>();

  return (
    <div>
      <Header />
      <div id="ide_main_board">
        <div>
          {roomId && lang && <CodeEditor roomId={roomId} language={lang} />}
        </div>
        <div id="vertical-line" />

      </div>
    </div>
  );
};

export default Dashboard;
