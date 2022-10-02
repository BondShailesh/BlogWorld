import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
//
function PrivateRoute({children}) {
  const {auth} = useSelector((state)=>state.auth)
 
  let navigate = useNavigate()
  const tokenVerify = JSON.parse(localStorage.getItem("token"));

if(!(tokenVerify)){
  return  <Navigate to="/signup"/>
}else{
 return children
}
  
}

export default PrivateRoute