import React from "react";
import style from "./MyTextareas.module.css"
class MyTextareas extends React.Component {

    render() {
        return (
            <label>
                <p>{this.props.label}:</p>
                    <textarea className={style.textarea} maxlength="435" rows="7" placeholder={this.props.placeholder}></textarea>
            </label>
        )
    }
}


export default MyTextareas;