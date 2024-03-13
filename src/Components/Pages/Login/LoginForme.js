import React from "react";


const Form = () =>{
    return(
    <form className="Form-Login">
        
        <div className="Inputs-Login">
            <input type="text" placeholder="EnteryourUsername"></input>
            <input type="password" placeholder="Password"></input>
        </div>
        <button type="submit">Login in your Account</button>
        </form>
        
    )
}
export default Form