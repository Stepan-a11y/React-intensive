import MyInputs from "./components/MyInputs";
import style from "./App.module.css"
import MyTextareas from "./components/MyTextareas";
import MyButtons from "./components/MyButtons";

function App() {
  return (
    <div className={style.app}>
      <h1>Создание анкеты</h1>
      <form className={style.form}>
        <div className={style.block}>
          <MyInputs label={"Фамилия"} placeholder={"Фамилия"} />
          <MyInputs label={"Имя"} placeholder={"Имя"} />
          <MyInputs label={"Дата рождения"} placeholder={"Дата рождения"} />
          <MyInputs label={"Телефон"} placeholder={"Телефон"} />
          <MyInputs label={"Сайт"} placeholder={"Сайт"} />
        </div>
        <div className={style.block}>
          <MyTextareas label={"О себе"} placeholder={"О себе"} />
          <MyTextareas label={"Стек технологий"} placeholder={"Стек технологий"}/>
          <MyTextareas label={"Описание последнего проекта"} placeholder={"Описание последнего проекта"}/>
        </div>
        <div className={style.btns}>
          <MyButtons butName="Отмена"/>
          <MyButtons butName="Сохранить"/>
        </div>
      </form>
    </div>
  );
}

export default App;
