import React from "react";
import { CardsDatas } from "./data";
const Cards = () =>{
    return(
        <div className="Cards-Conainer">
            <div className="Cards">
                {CardsDatas.map((props) =>{
                    return(
                        <div className="Conent">
                            <div className="Img"><img src={props.img}></img></div>
                            <div className="Age"><p>{props.mosha}</p></div>
                            <div className="Uni"><p>{props.fakullteti}</p></div>
                            <div className="Name"><p>{props.name}</p></div>
                            
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
} 
export default Cards