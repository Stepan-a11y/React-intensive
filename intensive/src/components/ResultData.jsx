import React from "react";
import style from "./ResultData.module.css"

const ResultData = (props) => {

        return (
            <div className={style.main}>
                <h1>{props.firstName} {props.lastName}</h1>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Дата рождения:</h3>
                        <h4>{props.birthDate}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>Номер телефона:</h3>
                        <h4>{props.phoneNumber}</h4>
                    </div>
                </div>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Сайт:</h3>
                        <h4>{props.webSite}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>О себе:</h3>
                        <h4>{props.about}</h4>
                    </div>
                </div>
                <div className={style.result}>
                    <div className={style.textContainer}>
                        <h3>Стек технологий:</h3>
                        <h4>{props.techStack}</h4>
                    </div>
                    <div className={style.textContainer}>
                        <h3>Последний проект:</h3>
                        <h4>{props.lastProject}</h4>
                    </div>
                </div>
            </div>
        )
}


export default ResultData;