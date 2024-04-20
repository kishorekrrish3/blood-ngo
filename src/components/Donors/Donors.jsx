import React from 'react'
import './Donors.css'
import { Link } from 'react-router-dom'
 
const Donors = () => {
    return(
        <div className='donors cont'>
            <div className="donors-container">
                <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Donors</h1>
                <div className="donors-buttons">
                    <Link to='/add-donor'><button className='donors-btn-add-donor btn btn-primary'>Add Donor</button></Link>
                    <Link to='/show-donors'><button className='donors-btn-show-donor btn btn-primary'>Show Donor</button></Link>
                </div>
            </div>
        </div>
  )
}

export default Donors