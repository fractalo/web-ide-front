import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmailIcon, PasswordIcon } from '../../assets';
import { useAuth } from '../../contexts/AuthContext';
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import './styles.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        const savedUsername = localStorage.getItem('username') || sessionStorage.getItem('username');
        const savedPassword = localStorage.getItem('password') || sessionStorage.getItem('password');
        if (savedUsername && savedPassword) {
            setUsername(savedUsername);
            setPassword(savedPassword);
            handleLogin({ preventDefault: () => {} } as React.FormEvent);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            console.log('아이디:', username);
            console.log('비밀번호:', password);

            // 실제 로그인 API 호출 예시
            // const response = await api.login({ username, password });
            // if (response.success) {
            //     login();
            //     navigate('/');
            // } else {
            //     setError('로그인에 실패했습니다. 사용자명 또는 비밀번호를 확인하세요.');
            // }

            // 로그인 성공 시 로그인 상태 업데이트
            login();
            if (autoLogin) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
            } else {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
            }
            navigate('/');
        } catch (err) {
            setError('로그인 중 오류가 발생했습니다.');
        }
        setLoading(false);
    };

    const handleKakaoLogin = () => {
        console.log('카카오 로그인');
    };

    const signInWithGoogle = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log(result);
            // 로그인 성공 시 로그인 상태 업데이트
            login();
            navigate('/');
          })
          .catch((error) => {
            console.error(error.code, error.message, error.customData.email);
            setError('구글 로그인 중 오류가 발생했습니다.');
            setLoading(false);
          });
    };

    return (
        <>
            <div className="login-container">
                <h2>로그인</h2>
                {error && <div className="error-message">{error}</div>}
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
                        <div className="auto-login-container">
                            <input
                                id="auto-login"
                                type="checkbox"
                                checked={autoLogin}
                                onChange={(e) => setAutoLogin(e.target.checked)}
                            />
                            <label htmlFor="auto-login">자동 로그인</label>
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
                    <button type="submit" disabled={loading}>
                        {loading ? '로그인 중...' : '로그인'}
                    </button>
                    <div className="kakao-google-login-container">
                        <img
                            src="/kakaoLoginShort.png"
                            alt="카카오 로그인"
                            className="kakao-login"
                            onClick={handleKakaoLogin}
                        />
                        <img
                            src="/googleLogin.png"
                            alt="구글 로그인"
                            className="google-login"
                            onClick={signInWithGoogle}
                        />
                    </div>
                </form>
                <div className="ifNotRegistered">
                    <p>아직 회원이 아니라면? <Link to="/register" className="links register-link">회원가입</Link></p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
