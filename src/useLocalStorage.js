import { useState, useEffect } from "react";

function getValueStorage(key, initialState) {
    const saveValue = JSON.parse(localStorage.getItem(key))

    if (saveValue) {
        return saveValue;
    }

    return initialState
}

function removeKeyStorage(key) {
    localStorage.removeItem(key)

    return ''
}

export function useLocalStorage(initialState) {
    const [token, setToken] = useState(() => getValueStorage('token', initialState))


    useEffect(() => {
        console.log(token)
        localStorage.setItem('token', JSON.stringify(token));
    }, [token])

    function setItem(newValue) {
        setToken(newValue)
    }

    function removeItem() {
        setToken(removeKeyStorage('token'))
    }

    return [token, { setItem, removeItem }]
}