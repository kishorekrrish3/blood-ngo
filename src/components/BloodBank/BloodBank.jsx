import React from 'react'
import './BloodBank.css'
import { Link } from 'react-router-dom'

const BloodBank = () => {
    return (
        <div className='blood-bank cont'>
            <div className='blood-bank-container'>
                <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Blood Banks</h1>
                <div className="blood-bank-buttons">
                    <Link to='/add-blood-bank'><button className='blood-bank-btn-add-blood-bank btn btn-primary'>Add Blood Bank</button></Link>
                    <Link to='/show-blood-bank'><button className='blood-bank-btn-show-blood-bank btn btn-primary'>Show Blood Banks</button></Link>
                </div>
            </div>
        </div>
  )
}

export default BloodBank