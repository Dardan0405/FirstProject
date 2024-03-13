import React from "react";
import {AbutusMegamenu}from "./Megamenus/data"
import Img from "../../assets/img1.png"
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <div className="Navbar">
            <div className="Logo-Navbar">
                <Link to={"/"}>
               
           <img src={Img}></img>
           </Link>
            </div>
            <div className="Links-Navbar">
            <a href="" className="AboutUs">Aboout Us
            <div className="Megamu Aboutus">
          {AbutusMegamenu.map((props) =>{
            return(
                <div className="Megamenu-Container">
                    <div className="Icon-Megamenu">{props.icon}</div>
                    <div className="Title"><p>{props.title}</p></div>
                </div>
            )
          })}
            </div>
            </a>
            <Link to={"/Contact"}>Contact Us</Link>
            <Link to={"/Blog"}>Blog</Link>
            </div>
            <div className="Login-Signup">
            <Link to={"/Login"}>Login</Link>
                <a href="">Signup</a>
            </div>
           
        </div>
    )

}
export default Navbar