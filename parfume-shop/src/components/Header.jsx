import React from "react";
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="" alt="#" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="catalog">
                <p className="home">Home</p>
                <p>Catalog</p>
            </div>
        </header>
    )
}

export default Header;
