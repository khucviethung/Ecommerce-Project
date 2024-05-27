import React, { useState } from 'react';
import './LoginForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LuLock } from "react-icons/lu";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';


// use Hook
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [listUsers] = useState(new Array<Object>());
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // xử lý khi submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUsername('') // trả về renew sau khi đã bấm submit
        setPassword('') // trả về renew sau khi đã bấm submit

        // Handle form submission logic here
        console.log('Username:', username, '\n', 'Password:', password);
        notify();
    };

    // thông báo
    const notify = () => {
        var regexUsername = /^[a-z]{4,}$/   // ký tự từ a-z,nhập ít nhất 1 ký tự
        var regexPassword = /^[0-9]{4,}$/     // ký tự khoảng từ 0-9,nhập ít nhất 8 ký tự


        if (regexUsername.test(username) && regexPassword.test(password)) {
            toast.success('Log in Successfully ! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            // render listUser
            listUsers.push({
                username: username,
                password: password
            })
            console.log("List user :", listUsers)

        }
        else if (!username && !password ) {
            setUsernameError('* Vui lòng điền ít nhất 4 chữ cái');
            setPasswordError('* Mật khẩu phải ít nhất có 8 kí tự');
            toast.warn('Missing title ! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            setUsernameError('* Vui lòng điền ít nhất 4 chữ cái');
            setPasswordError('* Mật khẩu phải ít nhất có 8 kí tự');
            toast.error('Login failed !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    // render
    return (
        <>
            <Container>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Đăng nhập</h2>
                    <h2></h2>
                    <div className="form-group">
                        <label htmlFor="username"><FaRegUser /> Tên người dùng </label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Tên ...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus />
                        <div className='usernameError text-danger'>
                            {usernameError && <p className="error-message">{usernameError}</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><LuLock />Mật khẩu</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder='Nhập mật khẩu...'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <span
                                className="password-toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className='passwordError text-danger'>
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <button id='buttonsubmit' type="submit">ĐĂNG NHẬP</button>
                        <ToastContainer />
                    </div>
                    <div className='suggesst text-center'>
                        <span>Bạn chưa có tài khoản ? <Link to={'/About'} className='text-danger link-underline-danger'>Đăng ký</Link></span>
                    </div>
                </form>
            </Container>
        </>

    );
};

export default LoginForm;
