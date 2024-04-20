import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-container">
                <Link to='/profile' className='btn btn-primary profile-btn'>Profile</Link>
                <h1 className='home-title'>Blood Donation NGO</h1>
                <div className='home-buttons'>
                    <Link to='/blood'><button className='home-btn-blood btn btn-danger'>Blood</button></Link>
                    <Link to='/donors'><button className='home-btn-donor btn btn-primary'>Donors</button></Link>
                    <Link to='/blood-bank'><button className='home-btn-blood-bank btn btn-warning'>Blood Banks</button></Link>
                    <Link to='/hospitals'><button className='home-btn-blood-hospital btn btn-success'>Hospitals</button></Link>
                    <Link to='/employees'><button className='home-btn-blood-employee btn btn-secondary'>Employees</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Home