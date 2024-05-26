import React, { useState } from 'react';
import './LoginForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import { LuLock } from "react-icons/lu";
import { FaEye, FaEyeSlash, FaRegUser } from "react-icons/fa";
import { ToastContainer,toast } from 'react-toastify';



// use Hook
const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


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
        toast.success('Log in successfully! Wait a second ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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
                <button type="submit" onClick={notify}>Log in</button>
            </div>
        </form>

    );
};

export default LoginForm;
