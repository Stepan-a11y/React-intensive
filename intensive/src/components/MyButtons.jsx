import React from "react";
import style from "./MyButtons.module.css"

class MyButtons extends React.Component {

    render() {
        return (
            <input className={style.button} {...this.props} />
        )
    }
}


export default MyButtons;