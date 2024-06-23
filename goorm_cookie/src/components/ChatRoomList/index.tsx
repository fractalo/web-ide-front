import React from 'react';
import './ChatRoomList.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


interface ChatRoom {
    meetingId: string;
    title: string;
}

interface ChatRoomListProps {
    chatrooms: ChatRoom[];
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({ chatrooms }) => {
    const style = {
        textDecoration: "none",
        color: '#f0f0f0',
        display: 'flex',
        borderTop: '1px solid #f0f0f0',
        minHeight: '40px'
    }
    return (
        <StyledChatRoomList className="chatroom-list">
            {chatrooms.map((chatroom,key) => (
                <StyledChatRoom key={chatroom.meetingId}>
                    <StyledChatRoomEntry className="chatroom-entry">
                        {chatroom.title}
                    </StyledChatRoomEntry>
                </StyledChatRoom>
            ))}
        </StyledChatRoomList>
    );
};

const StyledChatRoomList = styled.div`
    height : 100%;
    width : 900px;
`

const StyledChatRoom = styled.div`
    display: flex;
    alignItems: 'center';
    borderTop: '1px solid #f0f0f0';
    minHeight: '40px';
    color: '#f0f0f0';  
    margin-bottom: 10px;
`


const StyledChatRoomEntry= styled.div`
    margin-top: auto;
    margin-bottom: auto;
`

const StyledCircle = styled.div`
    background-color : green;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-top: auto;
    margin-bottom: auto;
`

export default ChatRoomList;
