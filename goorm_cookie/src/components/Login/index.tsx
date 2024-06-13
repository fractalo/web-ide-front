import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmailIcon, PasswordIcon } from '../../assets';
import './styles.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인 로직 처리
        console.log('아이디:', username);
        console.log('비밀번호:', password);
    };

    const handleKakaoLogin = () => {
        // 카카오 로그인 로직 처리
        console.log('카카오 로그인');
    };

    return (
        <>
            <div className="login-container">
                <h2>로그인</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username"></label>
                        <div className="input-icon-container">
                            <EmailIcon className="input-icon" />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="아이디를 입력하세요"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <div className="input-icon-container">
                            <PasswordIcon className="input-icon" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="비밀번호를 입력하세요"
                                required
                            />
                                <Link to="/forgot-password" className="links pass-link">비밀번호가 기억나지 않는다면?</Link>
                        </div>
                    </div>
                    <button type="submit">로그인</button>
                    <div className="kakao-login-container">
                        <img
                            src="/kakaoLogin.png"
                            alt="카카오 로그인"
                            className="kakao-login"
                            onClick={handleKakaoLogin}
                        />
                    </div>
                </form>
                <div className="ifNotRegistered">
                    아직 회원이 아니라면?
                     <Link to="/register" className="links register-link">회원가입</Link>
                </div>
            </div>
        </>
    );
};

export default Login;