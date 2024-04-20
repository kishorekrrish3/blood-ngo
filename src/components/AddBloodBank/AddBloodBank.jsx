import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import './AddBloodBank.css'

const AddBloodBank = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        branch_id: '',
        branch: '',
        contact_info: '',
        location: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_blood_bank', values)
            .then((res) => {
                navigate('/blood-bank');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-blood-bank cont'>
            <div className="add-blood-bank-container">
                <Link to='/blood-bank' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Add Blood Bank</h1>
                <form className='add-blood-bank-form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Branch ID</label>
                        <input type='number' className='form-control add-blood-bank-input-b-id' onChange={(e) => setValues({...values, branch_id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Branch Name</label>
                        <input type='text' className='form-control add-blood-bank-input-d-id' onChange={(e) => setValues({...values, branch: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Contact Info</label>
                        <input type='text' className='form-control add-blood-bank-input-donation-date' onChange={(e) => setValues({...values, contact_info: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Location</label>
                        <input type='text' className='form-control add-blood-bank-input-blood-type' onChange={(e) => setValues({...values, location: e.target.value})}></input>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary add-blood-bank-btn-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddBloodBank