import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/codeEditor';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Dashboard: React.FC = () => {
  const { roomId, lang } = useParams<{ roomId: string; lang: string }>();

  return (
    <div>
      <Header />
        {roomId && lang && <CodeEditor roomId={roomId} language={lang} />}
      <Footer />
    </div>
  );
};

export default Dashboard;
