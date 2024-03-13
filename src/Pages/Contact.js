import React from "react";
import Navbar from "../Components/Shared/Navbar";
import MobileBar from "../Components/Shared/MobileBar";
import PopUp from "../Components/Pages/PopUp/PopUp";

const ContactPage = () =>{
return(
    <div className="PopUp-Page">
        <Navbar/>
        <MobileBar/>
        <PopUp/>
    </div>
)
}
export default ContactPage