import React, { useState } from 'react';
import './AddDonors.css';  
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
 
const AddDonors = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id: '',
        name: '',
        age: '',
        gender: '',
        phone: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_donor', values)
            .then((res) => {
                navigate('/donors');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className='add-donors cont'>
            <div className="add-donors-container">
                <Link to='/donors' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Add Donors</h1>
                <form className='add-donors-form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Donor ID</label>
                        <input type='number' className='form-control add-donor-input-id' onChange={(e) => setValues({...values, id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donor Name</label>
                        <input type='text' className='form-control add-donor-input-name' onChange={(e) => setValues({...values, name: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donor Age</label>
                        <input type='number' className='form-control add-donor-input-age' onChange={(e) => setValues({...values, age: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donor Gender</label>
                        <input type='text' className='form-control add-donor-input-gender' onChange={(e) => setValues({...values, gender: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Donor Phone</label>
                        <input type='number' className='form-control add-donor-input-phone' onChange={(e) => setValues({...values, phone: e.target.value})}></input>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary add-donors-btn-submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AddDonors