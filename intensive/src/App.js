import React from "react";
import MyInputs from "./components/MyInputs";
import style from "./App.module.css"
import MyTextareas from "./components/MyTextareas";
import MyButtons from "./components/MyButtons";
import ResultData from "./components/ResultData";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeDataForm = this.changeDataForm.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.cancelChangeForm = this.cancelChangeForm.bind(this)
    this.state = {
      firstName: "",
      lastName: "",
      birthDate: "",
      phoneNumber: "",
      webSite: "",
      about: "",
      techStack: "",
      lastProject: "",
      aboutAreaCounter: 600,
      stackAreaCounter: 600,
      projectAreaCounter: 600,
      firstNameDirty: false,
      lastNameDirty: false,
      birthDateDirty: false,
      phoneNumberDirty: false,
      webSiteDirty: false,
      aboutDirty: false,
      techStackDirty: false,
      projectDirty: false,
      birthDateError: "Поле пустое. Заполните пожалуйста",
      firstNameError: "Поле пустое. Заполните пожалуйста",
      lastNameError: "Поле пустое. Заполните пожалуйста",
      phoneNumberError: "Поле пустое. Заполните пожалуйста",
      webSiteError: "Поле пустое. Заполните пожалуйста",
      aboutError: "Поле пустое. Заполните пожалуйста",
      techStackError: "Поле пустое. Заполните пожалуйста",
      projectError: "Поле пустое. Заполните пожалуйста",
      formValid: true,
      onSubmit: false
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.firstNameDirty || !this.state.lastNameDirty || !this.state.birthDateDirty || !this.state.phoneNumberDirty
      || !this.state.webSiteDirty || !this.state.aboutDirty || !this.state.techStackDirty || !this.state.projectDirty) {
      this.setState({
        formValid: false
      })
    } else {
      this.setState({
        formValid: true,
        onSubmit: true
      })
    }
  }


  changeDataForm(e) {
    let name = e.target.name;
    this.setState({ [name]: e.target.value })
    let reg;
    let res;
    switch (name) {
      case "firstName":
        reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
        if (!reg.test(String(e.target.value))) {
          this.setState({ firstNameError: "Не соответствует требованиям!" })
        } else {
          this.setState({ firstNameError: "" })
        }
        break
      case "lastName":
        reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
        if (!reg.test(String(e.target.value))) {
          this.setState({ lastNameError: "Не соответствует требованиям!" })
        } else {
          this.setState({ lastNameError: "" })
        }
        break
      case "birthDate":
        if (!e.target.value) {
          this.setState({ birthDateError: "Поле пустое. Заполните пожалуйста" })
        } else {
          this.setState({ birthDateError: "" })
        }
        break
      case "phoneNumber":
        if (!e.target.value) {
          this.setState({ phoneNumberError: "Поле пустое. Заполните пожалуйста" })
        } else {
          this.setState({ phoneNumberError: "" })
        }
        var string = e.target.value;
        string = string.replace(/-/g, "");
        var regex = /^([^\s]{2})([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
        var match = regex.exec(string);
        if (match) {
          match.shift();
          string = match.join("-")
        }
        this.setState({ phoneNumber: string });
        break
      case "webSite":
        reg = /https?:\/\//
        if (!reg.test(String(e.target.value))) {
          this.setState({ webSiteError: "Не соответствует требованиям!" })
        } else {
          this.setState({ webSiteError: "" })
        }
        break
      case "about":
        res = e.target.value;
        this.setState({
          aboutAreaCounter: 600 - res.length
        })
        if (!e.target.value) {
          this.setState({ aboutError: "Поле пустое. Заполните пожалуйста" })
        } else {
          this.setState({ aboutError: "" })
        }
        break
      case "techStack":
        res = e.target.value;
        this.setState({
          stackAreaCounter: 600 - res.length
        })
        if (!e.target.value) {
          this.setState({ techStackError: "Поле пустое. Заполните пожалуйста" })
        } else {
          this.setState({ techStackError: "" })
        }
        break
      case "lastProject":
        res = e.target.value;
        this.setState({
          projectAreaCounter: 600 - res.length
        })
        if (!e.target.value) {
          this.setState({ projectError: "Поле пустое. Заполните пожалуйста" })
        } else {
          this.setState({ projectError: "" })
        }
        break
        default: throw new Error("Нет нужного совпадения!")
    }
  }


  handleBlur(e) {
    switch (e.target.name) {
      case "firstName":
        this.setState({ firstNameDirty: true })
        break
      case "lastName":
        this.setState({ lastNameDirty: true })
        break
      case "birthDate":
        this.setState({ birthDateDirty: true })
        break
      case "phoneNumber":
        this.setState({ phoneNumberDirty: true })
        break
      case "webSite":
        this.setState({ webSiteDirty: true })
        break
      case "about":
        this.setState({ aboutDirty: true })
        break
      case "techStack":
        this.setState({ techStackDirty: true })
        break
      case "lastProject":
        this.setState({ projectDirty: true })
        break
        default: throw new Error("Нет нужного совпадения!")
    }

  }


  cancelChangeForm() {
    this.setState({
      firstName: "",
      lastName: "",
      birthDate: "",
      phoneNumber: "",
      webSite: "",
      about: "",
      techStack: "",
      lastProject: "",
      aboutAreaCounter: 600,
      stackAreaCounter: 600,
      projectAreaCounter: 600,
      firstNameDirty: false,
      lastNameDirty: false,
      birthDateDirty: false,
      phoneNumberDirty: false,
      webSiteDirty: false,
      aboutDirty: false,
      techStackDirty: false,
      projectDirty: false,
      birthDateError: "Поле пустое. Заполните пожалуйста",
      firstNameError: "Поле пустое. Заполните пожалуйста",
      lastNameError: "Поле пустое. Заполните пожалуйста",
      phoneNumberError: "Поле пустое. Заполните пожалуйста",
      webSiteError: "Поле пустое. Заполните пожалуйста",
      aboutError: "Поле пустое. Заполните пожалуйста",
      techStackError: "Поле пустое. Заполните пожалуйста",
      projectError: "Поле пустое. Заполните пожалуйста",
      formValid: true,
      onSubmit: false
    })
  }

  render() {
    return (
      (this.state.formValid && this.state.onSubmit)
        ? <ResultData state={this.state} />
        : <div className={style.app}>
          <h1>Создание анкеты</h1>
          <form onSubmit={this.handleSubmit} className={style.form}>
            <div className={style.block}>
              <MyInputs onBlur={this.handleBlur} name="firstName" value={this.state.firstName} label={"Фамилия"} placeholder={"Фамилия"} onChange={this.changeDataForm} />
              {((this.state.firstNameDirty && this.state.firstNameError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.firstNameError}</p>}
              <MyInputs onBlur={this.handleBlur} name="lastName" value={this.state.lastName} label={"Имя"} placeholder={"Имя"} onChange={this.changeDataForm} />
              {((this.state.lastNameDirty && this.state.lastNameError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.lastNameError}</p>}
              <MyInputs onBlur={this.handleBlur} name="birthDate" label={"Дата рождения"} value={this.state.birthDate} onChange={this.changeDataForm} />
              {((this.state.birthDateDirty && this.state.birthDateError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.birthDateError}</p>}
              <MyInputs onBlur={this.handleBlur} name="phoneNumber" maxLength="16" label={"Телефон"} placeholder={"+XXXXXXXXXXX"} value={this.state.phoneNumber} onChange={this.changeDataForm} />
              {((this.state.phoneNumberDirty && this.state.phoneNumberError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.phoneNumberError}</p>}
              <MyInputs onBlur={this.handleBlur} name="webSite" label={"Сайт"} placeholder={"https://www.rrrr.com"} value={this.state.webSite} onChange={this.changeDataForm} />
              {((this.state.webSiteDirty && this.state.webSiteError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.webSiteError}</p>}
            </div>
            <div className={style.block}>
              <MyTextareas onBlur={this.handleBlur} name="about" label={"О себе"} placeholder={"О себе"} value={this.state.about} onChange={this.changeDataForm} />
              {(this.state.aboutAreaCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {this.state.aboutAreaCounter}/600 символов</p>}
              {((this.state.aboutDirty && this.state.aboutError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.aboutError}</p>}
              <MyTextareas onBlur={this.handleBlur} name="techStack" label={"Стек технологий"} placeholder={"MEAN, MERN..."} value={this.state.techStack} onChange={this.changeDataForm} />
              {(this.state.stackAreaCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {this.state.stackAreaCounter}/600 символов</p>}
              {((this.state.techStackDirty && this.state.techStackError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.techStackError}</p>}
              <MyTextareas onBlur={this.handleBlur} name="lastProject" label={"Описание последнего проекта"} placeholder={"Описание последнего проекта"} value={this.state.lastProject} onChange={this.changeDataForm} />
              {(this.state.projectAreaCounter === 0) ? <p style={{ color: "red" }}>Превышен лимит символов!</p> : <p>Осталось {this.state.projectAreaCounter}/600 символов</p>}
              {((this.state.projectDirty && this.state.projectError) || !this.state.formValid) && <p style={{ color: "red" }}>{this.state.projectError}</p>}
            </div>
            <div className={style.btns}>
              <MyButtons type="button" value="Отмена" onClick={this.cancelChangeForm} />
              <MyButtons type="submit" value="Сохранить" />
            </div>
          </form>
        </div>
    );
  }
}

export default App;
