import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';

function Nav(){

    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }
    ,
    []);

    return(
        <>
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
            alt="Netflix"
            />
            <img className="nav_avatar"
            src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
            alt="Netflix Avatar"
            />
        </div>
        </>
    );
}

export default Nav;