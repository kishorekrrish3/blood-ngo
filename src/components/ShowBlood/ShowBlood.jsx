import React, { useEffect, useState } from 'react'
import './ShowBlood.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowBlood = () => {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        axios.get('/blood').then((res) => {
        setData(res.data);
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])
    
    function handleDelete(id) {
        axios.delete(`/delete_blood/${id}`)
            .then((res) => {
                setDeleted(true)
        }).catch((err)=>console.log(err))
    }

    return (
        <div className='show-blood cont'>
            <div className="show-blood-container">
                <Link to='/blood' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Show Blood Details</h1>
                <div className='show-blood-table-container'>
                    <table className='show-blood-table table table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Blood ID</th>
                                <th scope="col">Donor ID</th>
                                <th scope="col">Donation Date</th>
                                <th scope="col">Blood Type</th>
                                <th scope="col">Rh Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((blood) => {
                                    return (<tr key={blood.d_id}>
                                        <td>{blood.b_id}</td>
                                        <td>{blood.d_id}</td>
                                        <td>{ blood.donation_date.slice(0, 10) }</td>
                                        <td>{blood.blood_type}</td>
                                        <td>{blood.rh_type+"ve"}</td>
                                        <td>{blood.quantity}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(blood.b_id)}>Delete</button>
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

export default ShowBlood