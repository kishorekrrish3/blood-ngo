import React, { useEffect, useState } from 'react'
import './ShowEmployee.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowEmployee = () => {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        axios.get('/employees').then((res) => {
        setData(res.data);
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])
    
    function handleDelete(id) {
        axios.delete(`/delete_employee/${id}`)
            .then((res) => {
                setDeleted(true)
        }).catch((err)=>console.log(err))
    }

    return (
        <div className='show-employees cont'>
            <div className="show-employees-container">
                <Link to='/employees' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Show Employees</h1>
                <div className='show-employee-table-container'>
                    <table className='show-employees-table table table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Employee Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((employee) => {
                                    return (<tr key={employee.e_id}>
                                        <td>{employee.e_id}</td>
                                        <td>{employee.e_name}</td>
                                        <td>{employee.e_phone}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(employee.e_id)}>Delete</button>
                                        </td>   
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default ShowEmployee