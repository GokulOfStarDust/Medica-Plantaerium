import React from "react";


const Login = ({setIsLoggedIn,isLoggedIn}) => {
    return(
        <div onClick={()=> setIsLoggedIn(!isLoggedIn)}>
            <h1>{isLoggedIn + ''}</h1>
        </div>
    )
}

export default Login;