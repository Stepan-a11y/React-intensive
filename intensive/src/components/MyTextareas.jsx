import React from "react";
import style from "./MyTextareas.module.css"


const MyTextareas = (props) => {
        return (
            <label>
                <p>{props.label}:</p>
                <textarea className={style.textarea} maxLength="600" rows="7" {...props}></textarea>
            </label>
        )
}


export default MyTextareas;