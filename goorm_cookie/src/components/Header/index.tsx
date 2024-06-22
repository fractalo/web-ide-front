import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0C081E;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: fixed;
  left: -0.5rem;
  margin-right: 42rem;
  `;

const Logo = styled.img`
    width: 100px;
    height: auto;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: white;
  margin : auto 40px auto 20px;
`;

export default function Header() {
  return (
    <Container>
      <a href="/">
        <Logo src="/CODEinthebus-logo.png" alt="CODEinthebus logo" />
      </a>  
      <Line />
    </Container>
  )
}
