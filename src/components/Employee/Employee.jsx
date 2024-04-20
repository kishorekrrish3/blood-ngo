import React from 'react'
import { Link } from 'react-router-dom'
import './Employee.css'

const Employee = () => {
    return (
        <div className='blood cont'>
            <div className='blood-container'>
                <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Employees</h1>
                <div className="blood-buttons">
                    <Link to='/add-employee'><button className='blood-btn-add-blood btn btn-primary'>Add Employee</button></Link>
                    <Link to='/show-employees'><button className='blood-btn-show-blood btn btn-primary'>Show Employees</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Employee