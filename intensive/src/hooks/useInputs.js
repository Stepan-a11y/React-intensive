import { useState } from "react"
import { useValid } from "./useValid";

export const useInputs = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const [symbolCounter, setCounter] = useState(600);

    const valid = useValid(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
        setCounter(600 - e.target.value.length)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    const clearForm = () => {
        setValue(initialValue);
        setDirty(false);
        setCounter(600);
    }

    return {
        value,
        symbolCounter,
        onChange,
        onBlur,
        clearForm,
        isDirty,
        ...valid
    }
}