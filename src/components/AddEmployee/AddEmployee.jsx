import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './AddEmployee.css'

const AddEmployee = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        e_id: '',
        e_name: '',
        e_phone: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_employee', values)
            .then((res) => {
                navigate('/employees'); 
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    return (
    <div className='add-employee cont'>
            <div className="add-employee-container">
                <Link to='/employees' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Add Employee</h1>
                <form className='add-employee-form' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label>Employee ID</label>
                        <input type='number' className='form-control add-employee-input-e-id' onChange={(e) => setValues({...values, e_id: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Employee Name</label>
                        <input type='text' className='form-control add-employee-input-e-name' onChange={(e) => setValues({...values, e_name: e.target.value})}></input>
                    </div>
                    <div className='mb-3'>
                        <label>Employee Phone</label>
                        <input type='number' className='form-control add-employee-input-e-phone' onChange={(e) => setValues({...values, e_phone: e.target.value})}></input>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary add-employee-btn-submit'>Submit</button>
                    </div>
                </form>
          </div>
    </div>
  )
}

export default AddEmployee