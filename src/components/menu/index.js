import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import Logo from "../../assets/logo.svg";

const Menu = () => {
    return (
        <div className="nav">
            <img className="nav-logo" src={Logo} alt="logo" ></img>
            <ul className="menu">
                <li><Link className="link" to="/">Início</Link></li>
                <li><Link className="link" to="/pets">Animais</Link></li>
                <li><Link className="link" to="/about">Sobre</Link></li>
            </ul>
        </div>
    )
}

export default Menu