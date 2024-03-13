import React from "react";
import background from "../../../assets/Blog/background.webp"
import "./Banner.scss"

const Banner =  () =>{
return(
    <div className="Banner-Blog-Background" style={{background: `url(${background})`}}>
        <h1>Together we can keep our environment clean</h1>
        <p>Berllog.com is the online platform which aims to encourage the citizens of Kosovo to contribute to keeping the environment clean</p>
    </div>
)
}
export default Banner