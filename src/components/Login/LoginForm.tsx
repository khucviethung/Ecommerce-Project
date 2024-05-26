import React, { useState } from 'react';
import './LoginForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LuLock } from "react-icons/lu";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';

// use Hook
const LoginForm: React.FC = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [listUsers] = useState(new Array<Object>()); 

    // xử lý khi submit
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUsername('') // trả về renew sau khi đã bấm submit
        setPassword('') // trả về renew sau khi đã bấm submit
        // Handle form submission logic here
        console.log('Username:', username, '\n', 'Password:', password);
        notify();
    };

    const notify = () => {
        var regex = /^[a-z]{1,5}$/

        if(regex.test(username)) {
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
            
            listUsers.push({
                username: username,
                password: password
            })

            console.log(listUsers)
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div className="form-group">
                <label htmlFor="username"><FaRegUser /> Username or email address</label>
                <input
                    type="text"
                    id="username"
                    placeholder='Your username...'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password"><LuLock /> Password</label>
                <div className="password-wrapper">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        placeholder='Please enter a password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="password-toggle-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
            </div>

            <div className="form-group">
                <button id='buttonsubmit' type="submit">Log in</button>
                <ToastContainer />
            </div>
        </form>

    );
};

export default LoginForm;
