import React from "react";
import style from "./ResultData.module.css"

class ResultData extends React.Component {

    render() {
        return (
            <div className={style.main}>
                <h1>{this.props.state.firstName} {this.props.state.lastName}</h1>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Дата рождения:</h3>
                        <h4>{this.props.state.birthDate}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>Номер телефона:</h3>
                        <h4>{this.props.state.phoneNumber}</h4>
                    </div>
                </div>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Сайт:</h3>
                        <h4>{this.props.state.webSite}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>О себе:</h3>
                        <h4>{this.props.state.about}</h4>
                    </div>
                </div>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Стек технологий:</h3>
                        <h4>{this.props.state.techStack}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>Последний проект:</h3>
                        <h4>{this.props.state.lastProject}</h4>
                    </div>
                </div>
            </div>
        )
    }
}


export default ResultData;