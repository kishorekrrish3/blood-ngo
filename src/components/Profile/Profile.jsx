import React, { useEffect, useState } from 'react'
import './Profile.css'
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData()
  }, [])
  
  async function handleLogout() {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      toast.success("User logged out successfully!", { position: 'top-center' });
      navigate('/login');
    }
    catch (error) {
      console.log("Error logging out:", error.message);
      toast.error(error.message, { position: 'bottom-center' });
    }
  }

  return (
    <div className='profile cont'>
      {userDetails ? (
        <div className='profile-container'>
          <Link to='/home' className='btn btn-secondary back-btn'>Back</Link>
          <h1 className='profile-title'>Welcome {userDetails.name}</h1>
          <div className='profile-details'>
            <p>Email: {userDetails.email}</p>
            <p>Email: {userDetails.name}</p>
          </div>
          <button className='btn btn-primary profile-btn-logout' onClick={handleLogout}>Log Out</button>
        </div>
      ): (
          <p>Loading...</p>
      )}
      
    </div>
  )
}

export default Profile