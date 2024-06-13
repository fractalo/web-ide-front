import React from 'react'
import './dashboard.css'
import CodeEditor from '../../components/codeEditor';
import { v4 as uuidv4 } from 'uuid'

const dashboard: React.FC = () => {
  const roomId = uuidv4()

  return (
    <div style={{height: '100vh'}}>
      <h1>Dashboard</h1>
      <CodeEditor roomId={roomId} />
    </div>
  );
}

export default dashboard
