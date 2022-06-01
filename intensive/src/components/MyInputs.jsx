import React from "react";
import style from "./MyInputs.module.css"

const MyInputs = (props) => {

        return (
            <label>
                <p>{props.label}:</p>
                {(props.name === "birthDate") ? <input {...props} className={style.input} type="date"
                    value={props.value} />
                    : <input {...props} className={style.input} type="text"
                        value={props.value} />
                }
            </label>
        )
    
}


export default MyInputs;