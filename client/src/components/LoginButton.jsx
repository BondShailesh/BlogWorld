import React from 'react'
import {GoogleLogin} from "react-google-login"

const clientId = "731828041746-6uf7heq6sh6lihj170l8bv2c9kot81r0.apps.googleusercontent.com"

function LoginButton() {
    const onSuccess =(res)=>{
    console.log(res);
    }

    const onFailure =(res)=>{
    console.log(res);
    }
  return (
    <div id='signInButton'>
        <GoogleLogin 
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default LoginButton