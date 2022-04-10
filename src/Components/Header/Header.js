import React from "react";
import logoMarvel from '../../assets/logoMarvel.png';
import {Link} from "react-router-dom";
import "./header.css"

export const Header = () => {

    return (
        <header className="header">
            <nav className="topNavBar">
                <Link to="/">
                    <div className="topNavBar-brand">
                        <img className="logoImg" src={logoMarvel} alt={"Marvel logo"}/>
                    </div>

                </Link>
                <ul className="topNavBar-links">

                    <li className="nav-item">
                        <Link className="nav-link" to="/series">Series</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/comics">Comics</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Characters</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Stories</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Creators</Link>
                    </li>


                </ul>
            </nav>
        </header>
    )
}