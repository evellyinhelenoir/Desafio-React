import React from "react";
import './index.css'

const Header = ({title}) => (
    <header>
        <h1 className = "text-center"> {title} </h1>
    </header>
);

export default Header;