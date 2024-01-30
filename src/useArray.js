import { useState } from "react";

export function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    function update(index, newElement) {
        setArray(arr => [
            ...arr.slice(0, index),
            newElement,
            ...arr.slice(index + 1, arr.length)
        ])
    }

    function clear() {
        setArray([])
    }

    function remove(index) {
        setArray(arr => [
            ...arr.slice(0, index),
            ...arr.slice(index + 1, arr.length)
        ])
    }

    function filter(callback) {
        setArray(a => a.filter(callback))
    }

    return {
        array,
        push,
        update,
        clear,
        remove,
        filter
    }
}