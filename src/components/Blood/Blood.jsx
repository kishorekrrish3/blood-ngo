import React from 'react'
import { Link } from 'react-router-dom'
import './Blood.css'

const Blood = () => {
    return (
        <div className='blood cont'>
            <div className='blood-container'>
                <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Blood</h1>
                <div className="blood-buttons">
                    <Link to='/add-blood'><button className='blood-btn-add-blood btn btn-primary'>Add Blood Detail</button></Link>
                    <Link to='/show-blood'><button className='blood-btn-show-blood btn btn-primary'>Show Blood Details</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Blood