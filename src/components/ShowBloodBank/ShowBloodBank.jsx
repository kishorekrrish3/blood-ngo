import React, { useEffect, useState } from 'react'
import './ShowBloodBank.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowBloodBank = () => {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        axios.get('/blood_bank').then((res) => {
        setData(res.data);
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted]) 
    
    function handleDelete(id) {
        axios.delete(`/delete_blood_bank/${id}`)
            .then((res) => {
                setDeleted(true)
        }).catch((err)=>console.log(err))
    }

    return (
        <div className='show-blood-bank cont'>
            <div className="show-blood-bank-container">
                <Link to='/blood-bank' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Show Blood Banks</h1>
                <div className='show-blood-bank-table-container'>
                    <table className='show-blood-bank-table table table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Branch ID</th>
                                <th scope="col">Branch Name</th>
                                <th scope="col">Contact Info</th>
                                <th scope="col">Location</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((blood_bank) => {
                                    return (<tr key={blood_bank.branch_id}>
                                        <td>{blood_bank.branch_id}</td>
                                        <td>{blood_bank.branch}</td>
                                        <td>{blood_bank.contact_info}</td>
                                        <td>{blood_bank.location}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(blood_bank.branch_id)}>Delete</button>
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

export default ShowBloodBank