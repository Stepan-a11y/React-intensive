import React from "react";
import style from "./MyInputs.module.css"

class MyInputs extends React.Component {

    render() {
        return (
            <label>
                <p>{this.props.label}:</p>
                {(this.props.name === "birthDate") ? <input {...this.props} className={style.input} type="date"
                    value={this.props.value} />
                    : <input {...this.props} className={style.input} type="text"
                        value={this.props.value} />
                }
            </label>
        )
    }
}


export default MyInputs;