import { Box } from '@chakra-ui/react';
import React from 'react'
import {GoogleLogin} from "react-google-login"

const clientId = "731828041746-6uf7heq6sh6lihj170l8bv2c9kot81r0.apps.googleusercontent.com"

function LoginButton() {
    const onSuccess =(res)=>{
        localStorage.setItem("token",JSON.stringify({tempToken:res.accessToken}))
    console.log(res.accessToken);
    }

    const onFailure =(res)=>{
    console.log(res);
    }
  return (
    <Box id='signInButton' bg='pink' alignSelf='center'>
        <GoogleLogin 
        clientId={clientId}
        buttonText='Signup With Google'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </Box>
  )
}

export default LoginButton