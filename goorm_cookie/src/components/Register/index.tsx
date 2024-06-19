import React, { useState } from 'react';
import { EmailIcon, PasswordIcon } from '../../assets';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        // 비밀번호 길이 확인
        if (password.length < 6) {
            alert('비밀번호는 6자 이상이어야 합니다.');
            return;
        }

        // 비밀번호 일치 여부 확인
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // 회원가입 로직 처리 (여기서는 console.log로 대체)
        console.log('아이디:', username);
        console.log('비밀번호:', password);

        // 회원가입 완료 후 알림 표시 및 로그인 페이지로 리다이렉트
        alert('회원가입이 완료되었습니다!');
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h2>회원가입</h2>
            <form onSubmit={handleRegister}>
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
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword"></label>
                    <div className="input-icon-container">
                        <PasswordIcon className="input-icon" />
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="비밀번호를 다시 입력하세요"
                            required 
                        />
                    </div>
                </div>
                <button type="submit">회원가입</button>
            </form>
            <div className="ifAlreadyRegistered">
                <p>이미 회원이라면? <Link to="/login" className="links login-link">로그인</Link></p>
            </div>
        </div>
    );
};

export default Register;
