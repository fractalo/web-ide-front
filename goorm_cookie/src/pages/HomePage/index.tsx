import'./styles.css';
import Header from '../../components/Header'
<<<<<<< HEAD
=======
import MainContainer from '../../components/MainContainer'
>>>>>>> origin/hansol
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
      <>
<<<<<<< HEAD
      <Header />
      <div className="container">
      <div className="project-list">
        <h2>프로젝트 목록</h2>
        <div className="project-item">
          <div className="project-image" />
          <span>프로젝트명</span>
          </div>
          <div className="horizen-line"></div>
        </div>
        <div className="vertical-line"></div>
      <div className="member-list">
        <h2>인원 목록</h2>
        <div className="member-item">
          <div className="member-image" />
          <span>사용자명</span>
          <span className="role">권한(관리자/참여자)</span>
        </div>
        <div className="chat-box">
          <span>최근 종료된 대화방</span>
        </div>
      </div>
    </div>
=======
          <Header />
      <MainContainer></MainContainer>
>>>>>>> origin/hansol
      <Footer />
      </>
  )
}
