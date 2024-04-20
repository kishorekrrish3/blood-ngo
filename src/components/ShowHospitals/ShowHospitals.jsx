import React, { useEffect, useState } from 'react'
import './ShowHospitals.css' 
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowHospitals = () => { 
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);
    
    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        axios.get('/hospitals').then((res) => {
        setData(res.data);
        })
        .catch((err)=>console.log(err))
    }
    },[deleted])

    function handleDelete(id) {
        axios.delete(`/delete_hospital/${id}`)
            .then((res) => {
                setDeleted(true)
        }).catch((err)=>console.log(err))
    }

    return (
        <div className='show-hospitals cont text-center'>
            <div className="show-hospitals-container">
                <Link to='/hospitals' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Show Donors</h1>
                <div className='show-hospitals-table-container'>
                    <table className='show-hospitals-table table table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Hospital ID</th>
                                <th scope="col">Hospital Name</th>
                                <th scope="col">Hospital Location</th>
                                <th scope="col">No. of Previous Orders</th>
                                <th scope="col">Hospital Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((hospital) => {
                                    return (<tr key={hospital.d_id}>
                                        <td>{hospital.h_id}</td>
                                        <td>{hospital.h_name}</td>
                                        <td>{hospital.h_location}</td>
                                        <td>{hospital.prev_orders}</td>
                                        <td>{hospital.h_phone}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(hospital.h_id)}>Delete</button>
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

export default ShowHospitals