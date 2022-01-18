/* eslint-disable import/no-anonymous-default-export */
import react from "react";
import './Card.css'

export default props =>

<div className = "Card">
    <div className = "Content">
        {props.children}
    </div>
</div>