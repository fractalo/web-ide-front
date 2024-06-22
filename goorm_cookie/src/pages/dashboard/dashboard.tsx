import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/codeEditor';
import Header from '../../components/Header';
import ChatComponent from '../../components/ChatComponent/ChatComponent';
import ParticipantList from '../../components/ParticipantList';
import './dashboard.css';
import styled from 'styled-components';
import userDummy from '../../dummy/user.dummy'

//병합 
const Dashboard: React.FC = () => {
    const { roomId, lang } = useParams<{ roomId: string; lang: string }>();
    const [usersOnline, setUsersOnline] = useState<{ id: string, name: string, isOnline: boolean }[]>([
        { id: '1', name: 'Alice', isOnline: true },
        { id: '2', name: 'Bob', isOnline: false }
    ]);

    return (
        <StyledDashboard id="dashboard">
            <Header />
            <div className="dashboard-grid">
                <StyledDashboardGridLeft className="dashboard-grid-left">
                    {roomId && lang && <CodeEditor roomId={roomId} language={lang} />}
                </StyledDashboardGridLeft>

                <div className="dashboard-grid-right chat-component-wrapper">
                    <ParticipantList usersOnline={userDummy} />
                    <ChatComponent />
                </div>
            </div>
        </StyledDashboard>
    );
};

const StyledDashboard = styled.div`
    background-color: red;
    height : 100%;
`

const StyledDashboardGridLeft = styled.div`
    margin-right : 30px;
`

export default Dashboard;
