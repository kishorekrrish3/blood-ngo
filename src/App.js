import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import Welcome from './components/Welcome/Welcome';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './components/firebase';
import Home from './components/Home/Home';
import Donors from './components/Donors/Donors';
import AddDonors from './components/AddDonors/AddDonors';
import ShowDonors from './components/ShowDonors/ShowDonors';
import Blood from './components/Blood/Blood';
import AddBlood from './components/AddBlood/AddBlood';
import ShowBlood from './components/ShowBlood/ShowBlood';
import BloodBank from './components/BloodBank/BloodBank';
import AddBloodBank from './components/AddBloodBank/AddBloodBank';
import ShowBloodBank from './components/ShowBloodBank/ShowBloodBank';
import Hospitals from './components/Hospitals/Hospitals';
import AddHospital from './components/AddHospital/AddHospital';
import ShowHospitals from './components/ShowHospitals/ShowHospitals';
import Employee from './components/Employee/Employee';
import AddEmployee from './components/AddEmployee/AddEmployee';
import ShowEmployee from './components/ShowEmployee/ShowEmployee';


function App() { 
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  })

  return (
    <BrowserRouter>
      <div className="App">
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path="/" element={user ? <Navigate to='/profile' /> : <Welcome />} />
              <Route path='/home' element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/donors" element={<Donors />} />
              <Route path="/add-donor" element={<AddDonors />} />
              <Route path="/show-donors" element={<ShowDonors />} />

              <Route path="/blood" element={<Blood />} />
              <Route path="/add-blood" element={<AddBlood />} />
              <Route path="/show-blood" element={<ShowBlood />} />

              <Route path="/blood-bank" element={<BloodBank />} />
              <Route path="/add-blood-bank" element={<AddBloodBank />} />
              <Route path="/show-blood-bank" element={<ShowBloodBank />} />

              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/add-hospital" element={<AddHospital />} />
              <Route path="/show-hospitals" element={<ShowHospitals />} />

              <Route path="/employees" element={<Employee />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/show-employees" element={<ShowEmployee />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
