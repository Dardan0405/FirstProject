import React from "react";
import {AbutusMegamenu}from "./Megamenus/data"
import Img from "../../assets/img1.png"
import { Link } from "react-router-dom";
import SelectLanguage from "./SelectLanguage/SelectLanguage";
import { FormattedMessage } from "react-intl";
function Navbar () {
    return(
        <div className="Navbar">
            <div className="Logo-Navbar">
                <Link to={"/"}>
               
           <img src={Img}></img>
           </Link>
            </div>
            <div className="Links-Navbar">
            <Link to={"/AboutUs"} className="AboutUs">Aboout Us
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
            </Link>
            <Link to={"/Contact"}><FormattedMessage id="Contact" defaultMessage="Contact Us"/></Link>
            <Link to={"/Blog"}>Blog</Link>
            </div>
            <div className="Login-Signup">
            <Link to={"/Login"}><FormattedMessage id="Login" defaultMessage="Login"/></Link>
                <a href=""><FormattedMessage id="SignUp" defaultMessage="Signup"/></a>
            </div>
            <SelectLanguage/>
           
        </div>
    )

}
export default Navbar