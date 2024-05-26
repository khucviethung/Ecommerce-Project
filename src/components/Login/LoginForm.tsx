import React, { useState } from 'react';
import './LoginForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LuLock } from "react-icons/lu";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Container from 'react-bootstrap/esm/Container';


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
            setUsernameError('* Enter at least 4 letters from A-Z');
            setPasswordError('* Password must be a number at least 8 characters');
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
            setUsernameError('* Enter at least 4 letters from A-Z');
            setPasswordError('* Password must be a number at least 4 characters');
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
                    <h2>Sign In</h2>
                    <h2></h2>
                    <div className="form-group">
                        <label htmlFor="username"><FaRegUser /> Username </label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Your username...'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus />
                        <div className='usernameError text-danger'>
                            {usernameError && <p className="error-message">{usernameError}</p>}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><LuLock /> Password</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder='Please enter a password...'
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
                        <button id='buttonsubmit' type="submit">Log in</button>
                        <ToastContainer />
                    </div>
                </form>
            </Container>
        </>

    );
};

export default LoginForm;
