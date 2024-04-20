import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './AddHospital.css'

const AddHospital = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        h_id: '',
        h_name: '',
        h_location: '',
        prev_orders: '',
        h_phone: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_hospital', values)
            .then((res) => {
                navigate('/hospitals');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-hospital cont'>
            <div className="add-hospital-container">
                <Link to='/hospitals' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Add Hospital</h1>
                <form className='add-hospital-form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Hospital ID</label>
                        <input type='number' className='form-control add-hospital-input-h-id' onChange={(e) => setValues({...values, h_id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Hospital Name</label>
                        <input type='text' className='form-control add-hospital-input-h-name' onChange={(e) => setValues({...values, h_name: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Hospital Location</label>
                        <input type='text' className='form-control add-hospital-input-donation-h-location' onChange={(e) => setValues({...values, h_location: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Number of Previous Orders</label>
                        <input type='number' className='form-control add-hospital-input-blood-prev-orders' onChange={(e) => setValues({...values, prev_orders: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Hospital Phone</label>
                        <input type='number' className='form-control add-hospital-input-h-phone' onChange={(e) => setValues({...values, h_phone: e.target.value})}></input>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary add-hospital-btn-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddHospital