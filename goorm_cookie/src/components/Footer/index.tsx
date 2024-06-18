import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #0C081E;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  position: fixed;
  bottom: 1rem;
  left: -0.5rem;
  margin-right: 42rem;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Gif = styled.img`
  width: 100px;
  height: auto;
  margin-right: 1.2rem;
  transform: scaleX(-1);
  filter: invert(1) brightness(100) saturate(100);
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
  margin: 30px 20px 0px 20px;
`;

const InfoLink = styled.a`
  color: gray;
  text-decoration: none;
  margin-top: -1.2rem ;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <Container>
      <TopContainer>
        <Line />
        <Gif src="/BusGif.gif" alt="BusGif" />
      </TopContainer>
      <InfoLink href="/info">Info</InfoLink>
    </Container>
  );
}