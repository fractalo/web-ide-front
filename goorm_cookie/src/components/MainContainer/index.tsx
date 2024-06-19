import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: calc(100vh - 160px); // 헤더와 푸터 높이 고려
  margin-top: 80px; // 헤더 높이
  background-color: white;
  overflow: auto; // 필요에 따라 스크롤 추가
`;

interface MainContainerProps {
  children: ReactNode;  // children prop을 받기 위한 인터페이스 정의
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <Body>{children}</Body>;
}

export default MainContainer;
