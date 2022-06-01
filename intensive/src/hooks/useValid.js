import { useEffect, useState } from "react"


export const useValid = (value, validations) => {

    const [errorEmptyValue, setErrorEmptyValue] = useState('Поле пустое. Заполните пожалуйста');
    const [errorNamesValue, setErrorNamesValue] = useState('Не соответствует требованиям!');
    const [isEmpty, setEmpty] = useState(true);
    const [errorNames, setErrorNames] = useState(false);
    const [errorSite, setErrorSite] = useState(false);
    const [validForm, setValidForm] = useState(null)

    let reg;
    useEffect(() => {
        for (const validValue in validations) {
            switch (validValue) {
                case "isEmpty":
                    if (value) {
                        setEmpty(false)
                    } else {
                        setEmpty(true)
                        setErrorEmptyValue('Поле пустое. Заполните пожалуйста')
                    }
                    break
                case "errorNames":
                    reg = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
                    if (reg.test(String(value))) {
                        setErrorNames(false)
                    } else {
                        setErrorNames(true)
                        setErrorNamesValue('Не соответствует требованиям!')
                    }
                    break
                case "errorSite":
                    reg = /https?:\/\//
                    if (reg.test(String(value))) {
                        setErrorSite(false)
                    } else {
                        setErrorSite(true)
                    }
                    break
            }
        }

    }, [value])

    useEffect(() => {
        if (isEmpty || errorNames || errorSite) {
            setValidForm(false)
        } else {
            setValidForm(true)
        }
    }, [isEmpty, errorNames, errorSite])

    return {
        isEmpty,
        errorNames,
        errorEmptyValue,
        errorNamesValue,
        errorSite,
        validForm
    }
}