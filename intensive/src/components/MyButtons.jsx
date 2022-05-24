import React from "react";
import style from "./MyButtons.module.css"

class MyButtons extends React.Component {

    render() {
        return (
            <button className={style.button}>{this.props.butName}</button>
        )
    }
}


export default MyButtons;