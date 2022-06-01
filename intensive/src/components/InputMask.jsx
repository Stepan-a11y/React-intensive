import React, { useState, useEffect, useRef } from 'react';
import style from "./InputMask.module.css"

const InputMask = (props) => {


    let string = props.value;
    if (isNaN(Number(string)) && string[0] !== "+") {
        string = '';
    } else {
        string = string.replace(/-/g, "");
        let regex = /^([^\s]{2})([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
        let match = regex.exec(string);
        if (match) {
            match.shift();
            string = match.join("-")
        }
    }

    return (
        <label>
            <p>{props.label}:</p>
            <input className={style.input} type="tel" value={string}
                onChange={props.onChange} maxLength={props.maxLength}
                placeholder={props.placeholder}
                onBlur={props.onBlur} />
        </label>
    );
};

export default InputMask;