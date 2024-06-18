import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const C_Room: React.FC = () => {
  const [roomTitle, setRoomTitle] = useState<string>('');
  const [language, setLanguage] = useState<string>('javascript');
  const navigate = useNavigate();

  const handleRoomTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomTitle(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const createRoom = () => {
    if (roomTitle.trim() !== '') {
      navigate(`/room/${roomTitle}/${language}`);
    } else {
      alert('방 제목을 입력하세요.');
    }
  };

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="방 제목을 입력하세요"
        value={roomTitle}
        onChange={handleRoomTitleChange}
      />
      <select value={language} onChange={handleLanguageChange}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="c">C</option>
      </select>
      <button onClick={createRoom}>Create Room</button>
      <Footer />
    </div>
  );
};

export default C_Room;
