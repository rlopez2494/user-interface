import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import "./styles/MainSection.css";

function MainSection() {

  
    const href = window.location.href;

    
    return(

        <div id="main-section">

        {
            (href === "http://localhost:3000/") ? 
            (<LoginForm />) : (null)
        }
            
        </div>

    );
    
}

export default MainSection;