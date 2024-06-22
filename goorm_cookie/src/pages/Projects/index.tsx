import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ChatComponent from '../../components/ChatComponent/ChatComponent';
import ParticipantList from '../../components/ParticipantList';
import './projects.css';
import styled from 'styled-components';
import userDummy from '../../dummy/user.dummy'


const Dashboard: React.FC = () => {
    const { roomId, lang } = useParams<{ roomId: string; lang: string }>();
    const [usersOnline, setUsersOnline] = useState<{ id: string, name: string, isOnline: boolean }[]>([
        { id: '1', name: 'Alice', isOnline: true },
        { id: '2', name: 'Bob', isOnline: false }
    ]);

    return (
        <StyledProjects id="projects">
            <Header />
            <div className="projects-grid">
                <StyledProjectsGridLeft className="projects-grid-left">
                    {roomId && lang }
                </StyledProjectsGridLeft>

                <div className="dashboard-grid-right chat-component-wrapper">
                    <ParticipantList usersOnline={userDummy} />
                    <ChatComponent />
                </div>
            </div>
        </StyledProjects>
    );
};

const StyledProjects = styled.div`
    height : 100%;
`

const StyledProjectsGridLeft = styled.div`
    margin-right : 30px;
`

export default Dashboard;
