import React, { useEffect, useState } from 'react'
import './ShowDonors.css' 
import axios from 'axios';
import { Link } from 'react-router-dom';
  
const ShowDonors = () => {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);
    
    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        axios.get('/donors').then((res) => {
        setData(res.data);
        })
        .catch((err)=>console.log(err))
    }
    },[deleted])

    function handleDelete(id) {
        axios.delete(`/delete/${id}`)
            .then((res) => {
                setDeleted(true)
        }).catch((err)=>console.log(err))
    }

    return (
        <div className='show-donors cont text-center'>
            <div className="show-donors-container">
                <Link to='/donors' className='btn btn-secondary back-btn'>Back</Link>
                <h1>Show Donors</h1>
                <div className='show-donors-table-container'>
                    <table className='show-donors-table table table-hover'>
                        <thead>
                            <tr>
                                <th scope="col">Donor ID</th>
                                <th scope="col">Donor Name</th>
                                <th scope="col">Donor Age</th>
                                <th scope="col">Donor Gender</th>
                                <th scope="col">Donor Phone</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((donor) => {
                                    return (<tr key={donor.d_id}>
                                        <td>{donor.d_id}</td>
                                        <td>{donor.d_name}</td>
                                        <td>{donor.d_age}</td>
                                        <td>{donor.d_gender}</td>
                                        <td>{donor.d_phone}</td>
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={()=>handleDelete(donor.d_id)}>Delete</button>
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

export default ShowDonors