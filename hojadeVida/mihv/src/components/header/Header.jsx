import React from "react";
import "./header.css"
import fotopersonal from "./fotopersonal.png"



export default function Header() {
    return(
        <div className="header">
            <div className="headerPhoto">
                <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"} />
            </div>
            <div className="headerNombres">
                <h1>YEFRY ALEJANDRO MARIN SERRANO</h1>
                <p>Estudiando desarrollo de software</p>
            </div>
            <div className="headerContacto">
                <ul className="contactList"> 
                <li className="contactListItem"> <p>Smartphone</p> <p>3131234567</p> </li>
                <li className="contactListItem"> <p>Location</p> <p>Pereira/Risaralda - Colombia</p> </li>
                <li className="contactListItem"> <p>Email</p> <p></p>yefrimicv@gamil.com</li>
                </ul>
            </div>
            
        </div>
    )
}
