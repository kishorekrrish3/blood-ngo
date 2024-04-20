import React, { useState } from 'react'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully!");
            toast.success("User logged in successfully!", { position: 'top-center' });
            navigate('/home');
        } catch (error) {
            console.log(error);
            toast.error(error.message,{position:'bottom-center'});
        }
    }

    return (
    <div className='login cont'>
        <div className='login-container'>
            <h1 className='login-title'>Log In</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' className='form-control login-input-email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type='password' className='form-control login-input-password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary login-btn-login'>Log In</button>
                </div>
                <p className='login-footer-signup'>Don't have an account? <a href='/signup'>Sign Up</a></p>
            </form>
        </div>
    </div>
  )
}

export default Login