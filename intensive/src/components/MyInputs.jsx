import React from "react";
import style from "./MyInputs.module.css"

class MyInputs extends React.Component {

    render() {
        return (
            <label>
                <p>{this.props.label}:</p>
                <input className={style.input} type="text" placeholder={this.props.placeholder}/>
            </label>
        )
    }
}


export default MyInputs;