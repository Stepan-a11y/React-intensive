import React from "react";
import style from "./MyButtons.module.css"

const MyButtons = (props) => {
        return (
            <input className={style.button} {...props} />
        )   
}


export default MyButtons;