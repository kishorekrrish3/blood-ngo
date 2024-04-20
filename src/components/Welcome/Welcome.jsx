import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
    <div className='welcome'>
        <div className="welcome-container">
            <h1 className='welcome-title'>Welcome to our Blood Donation NGO!</h1>
            <div className='welcome-buttons'>
                <Link to='/login'><button className='welcome-btn-login btn btn-primary'>Login</button></Link>
                <Link to='/signup'><button className='welcome-btn-signup btn btn-primary'>Sign Up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome