import "./PopUp.scss"
import React from "react"
import { useState } from "react"
import { FormattedMessage } from "react-intl"


const PopUp = () =>{
    const [isPopUpOpen, setPopUpOpen] = useState(false);
    const openPup = () =>{
        setPopUpOpen(true)
    }
    const  closePopUp = () =>{
        setPopUpOpen(false)
    }
return(
    <div className="PopuP-Container">
<button onClick={openPup}>Click to OpenPpUp</button>
{
    isPopUpOpen &&(
        <div className="PopUp-Background">
            <div className="PopUp-Content">
                <h1>OutkosAcademy</h1>
                <p>This is PopUp for Outkos Acdemy</p>
                <button onClick={closePopUp}>Close</button>
            </div>
        </div>
    ) 
}
    </div>
)
}
export default PopUp