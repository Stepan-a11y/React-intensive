import React from "react";
import style from "./MyTextareas.module.css"
class MyTextareas extends React.Component {

    render() {
        return (
            <label>
                <p>{this.props.label}:</p>
                <textarea className={style.textarea} maxLength="600" rows="7" {...this.props}></textarea>
            </label>
        )
    }
}


export default MyTextareas;