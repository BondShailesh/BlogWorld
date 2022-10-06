import React from 'react'
import { Route, Routes } from "react-router-dom";
import Blog from '../pages/Blog';
import Create from '../pages/Create';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import OTPValidator from '../pages/Otpvalidator';
import Signup from '../pages/Signup';
import PrivateRoute from '../privateRoute/PrivateRoute';

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/blog/:id' element={<Blog />} />
                <Route path='/create' element={
                <PrivateRoute>
                <Create />
                </PrivateRoute>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/otp' element={<OTPValidator />} />
            </Routes>
        </div>
    )
}

export default AllRoutes