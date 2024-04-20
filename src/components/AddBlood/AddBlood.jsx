import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './AddBlood.css'

const AddBlood = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        b_id: '',
        d_id: '',
        donation_date: '',
        blood_type: '',
        rh_type: '',
        quantity: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_blood', values)
            .then((res) => {
                navigate('/blood'); 
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
    <div className='add-blood cont'>
            <div className="add-blood-container">
                <Link to='/blood' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Add Blood</h1>
                <form className='add-blood-form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Blood ID</label>
                        <input type='number' className='form-control add-blood-input-b-id' onChange={(e) => setValues({...values, b_id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donor ID</label>
                        <input type='number' className='form-control add-blood-input-d-id' onChange={(e) => setValues({...values, d_id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donation Date</label>
                        <input type='date' className='form-control add-blood-input-donation-date' onChange={(e) => setValues({...values, donation_date: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Blood Type</label>
                        <input type='text' className='form-control add-blood-input-blood-type' onChange={(e) => setValues({...values, blood_type: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Rh Type</label>
                        <input type='text' className='form-control add-blood-input-rh-type' onChange={(e) => setValues({...values, rh_type: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Quantity</label>
                        <input type='number' className='form-control add-blood-input-quantity' onChange={(e) => setValues({...values, quantity: e.target.value})}></input>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary add-blood-btn-submit'>Submit</button>
                    </div>
                </form>
          </div>
    </div>
  )
}

export default AddBlood