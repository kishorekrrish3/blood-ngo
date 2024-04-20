import React from 'react'
import './SignUp.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name
                })
            }
            console.log("User created successfully!");
            toast.success("User created successfully!", { position: 'top-center' });
            navigate('/login');
        } catch (error) {
            console.log(error);
            toast.error(error.message,{position:'bottom-center'});
        }
    };

    return (
    <div className='signup cont'>
        <div className='signup-container'>
            <h1 className='signup-title'>Sign Up</h1>
            <form className='signup-form' onSubmit={handleRegister}>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type='text' className='form-control login-input-name' value={name} onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' className='form-control login-input-email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type='password' className='form-control login-input-password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary signup-btn-signup'>Sign Up</button>
                </div>
                <p className='signup-footer-login'>Already have an account? <a href='/login'>Log In</a></p>
            </form>    
        </div>
    </div>
  )
}

export default SignUp