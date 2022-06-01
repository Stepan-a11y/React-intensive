import React, { useState } from "react";
import MyInputs from "./components/MyInputs";
import style from "./App.module.css"
import MyTextareas from "./components/MyTextareas";
import MyButtons from "./components/MyButtons";
import { useInputs } from "./hooks/useInputs";
import ResultData from "./components/ResultData";
import InputMask from "./components/InputMask";


const App = () => {

  const [onSubmit, setOnSubmit] = useState(null)

  const firstName = useInputs('', { isEmpty: true, errorNames: false })
  const lastName = useInputs('', { isEmpty: true, errorNames: false })
  const birthDate = useInputs('', { isEmpty: true })
  const phoneNumber = useInputs('', { isEmpty: true })
  const webSite = useInputs('', { isEmpty: true, errorSite: false })
  const about = useInputs('', { isEmpty: true })
  const techStack = useInputs('', { isEmpty: true })
  const lastProject = useInputs('', { isEmpty: true })

  const clear = () => {
    firstName.clearForm()
    lastName.clearForm()
    birthDate.clearForm()
    phoneNumber.clearForm()
    webSite.clearForm()
    about.clearForm()
    techStack.clearForm()
    lastProject.clearForm()
    setOnSubmit(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName.validForm || !lastName.validForm || !birthDate.validForm || !phoneNumber.validForm
      || !webSite.validForm || !about.validForm || !techStack.validForm || !lastProject.validForm) {
      setOnSubmit(false)
    } else {
      setOnSubmit(true)
    }
  }

  return (
    (onSubmit) ? <ResultData firstName={firstName.value} lastName={lastName.value} birthDate={birthDate.value}
      phoneNumber={phoneNumber.value} webSite={webSite.value} about={about.value} techStack={techStack.value} lastProject={lastProject.value} /> :
      <div className={style.app}>
        <h1>Создание анкеты</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.block}>
            <MyInputs value={firstName.value} onBlur={firstName.onBlur} onChange={firstName.onChange} name="firstName" label={"Фамилия"} placeholder={"Фамилия"} />
            {((firstName.isDirty && firstName.isEmpty) || (!firstName.validForm && onSubmit === false)) && <p style={{ color: "red" }}>{firstName.errorEmptyValue}</p>}
            {(firstName.isDirty && !firstName.isEmpty && firstName.errorNames) && <p style={{ color: "red" }}>{firstName.errorNamesValue}</p>}
            <MyInputs value={lastName.value} onBlur={lastName.onBlur} onChange={lastName.onChange} name="lastName" label={"Имя"} placeholder={"Имя"} />
            {((lastName.isDirty && lastName.isEmpty) || !lastName.validForm && onSubmit === false) && <p style={{ color: "red" }}>{lastName.errorEmptyValue}</p>}
            {(lastName.isDirty && !lastName.isEmpty && lastName.errorNames) && <p style={{ color: "red" }}>{lastName.errorNamesValue}</p>}
            <MyInputs value={birthDate.value} onBlur={birthDate.onBlur} onChange={birthDate.onChange} name="birthDate" label={"Дата рождения"} />
            {((birthDate.isDirty && birthDate.isEmpty) || !birthDate.validForm && onSubmit === false) && <p style={{ color: "red" }}>{birthDate.errorEmptyValue}</p>}
            <InputMask value={phoneNumber.value} onBlur={phoneNumber.onBlur} onChange={phoneNumber.onChange} maxLength="16" label={"Телефон"} placeholder={"+XXXXXXXXXXX"} />
            {((phoneNumber.isDirty && phoneNumber.isEmpty) || !phoneNumber.validForm && onSubmit === false) && <p style={{ color: "red" }}>{phoneNumber.errorEmptyValue}</p>}
            <MyInputs value={webSite.value} onBlur={webSite.onBlur} onChange={webSite.onChange} name="webSite" label={"Сайт"} placeholder={"https://www.rrrr.com"} />
            {((webSite.isDirty && webSite.isEmpty) || !webSite.validForm && onSubmit === false) && <p style={{ color: "red" }}>{webSite.errorEmptyValue}</p>}
            {(webSite.isDirty && !webSite.isEmpty && webSite.errorSite) && <p style={{ color: "red" }}>Не соответствует требованиям!</p>}
          </div>
          <div className={style.block}>
            <MyTextareas value={about.value} onBlur={about.onBlur} onChange={about.onChange} name="about" label={"О себе"} placeholder={"О себе"} />
            {((about.isDirty && about.isEmpty) || !about.validForm && onSubmit === false) && <p style={{ color: "red" }}>{about.errorEmptyValue}</p>}
            {(about.symbolCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {about.symbolCounter}/600 символов</p>}
            <MyTextareas value={techStack.value} onBlur={techStack.onBlur} onChange={techStack.onChange} name="techStack" label={"Стек технологий"} placeholder={"MEAN, MERN..."} />
            {((techStack.isDirty && techStack.isEmpty) || !techStack.validForm && onSubmit === false) && <p style={{ color: "red" }}>{techStack.errorEmptyValue}</p>}
            {(techStack.symbolCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {techStack.symbolCounter}/600 символов</p>}
            <MyTextareas value={lastProject.value} onBlur={lastProject.onBlur} onChange={lastProject.onChange} name="lastProject" label={"Описание последнего проекта"} placeholder={"Описание последнего проекта"} />
            {((lastProject.isDirty && lastProject.isEmpty) || !lastProject.validForm && onSubmit === false) && <p style={{ color: "red" }}>{lastProject.errorEmptyValue}</p>}
            {(lastProject.symbolCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {lastProject.symbolCounter}/600 символов</p>}
          </div>
          <div className={style.btns}>
            <MyButtons type="button" value="Отмена" onClick={clear} />
            <MyButtons type="submit" value="Сохранить" />
          </div>
        </form>
      </div>
  );
}

export default App;
