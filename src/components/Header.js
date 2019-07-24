import React from 'react';
import './styles/Header.css';
import logo from '../img/udo-logo.png'

function Header() {
    return(
        <div id="login-header">
            <img src={logo} alt="udo-logo-color" />
            <h1>sistema electoral electronico</h1>
            <a href="">SABER MAS</a>
        </div>
    );
}

export default Header