import React from 'react'
import { Link } from 'react-router-dom'
import './Hospitals.css'

const Hospitals = () => {
    return (
        <div className='hospitals cont'>
            <div className='hospital-container'>
                <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Hospitals</h1>
                <div className="hospital-buttons">
                    <Link to='/add-hospital'><button className='hospital-btn-add-hospital btn btn-primary'>Add Hospital</button></Link>
                    <Link to='/show-hospitals'><button className='hospital-btn-show-hospital btn btn-primary'>Show Hospitals</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Hospitals