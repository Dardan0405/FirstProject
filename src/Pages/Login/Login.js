import React from "react";
import Navbar from "../../Components/Shared/Navbar";
import MobileBar from "../../Components/Shared/MobileBar";
import Form from "../../Components/Pages/Login/LoginForme";
import "./Login.scss"

const LoginForm = () =>{
    return(
        <div className="Login-Page">
            <Navbar/>
            <MobileBar/>
            <Form/>

        </div>
    )
}
export default LoginForm