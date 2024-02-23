import { useReducer } from "react";

function handleDispatch(state, action) {
    if (action.type === "indexPlus") {
        if (state.index < action.defaultValue.length - 1) {
            return {
                value: action.defaultValue[state.index + 1],
                index: state.index + 1
            }   
        } else {
            return {
                value: action.defaultValue[0],
                index: 0
            }
        }
    }
    if (action.type === "editValue") {
        const valueInArr = action.defaultValue.findIndex((val) => val === action.propsValue)
        if (valueInArr > -1) {
            return {
                value: action.propsValue,
                index: valueInArr
            }
        }
    }
    if (action.type === "valueIsBoolean") {
        console.log(!state.value)

        return {
            value: typeof state.value === "boolean" ? !state.value : state.value,
            index: 0
        }
    }
 }

export function useToggle(defaultValue) {
    const defaultState = defaultValue ? defaultValue[0] : true
    const [state, dispatch] = useReducer(handleDispatch, { value: defaultState, index: 0 })
    
    function toggle(propsValue) {
        if (defaultValue !== undefined) {
            if (propsValue !== undefined) {
                dispatch({
                    type: "editValue",
                    defaultValue,
                    propsValue
                })
            } else {
                dispatch({
                   type: "indexPlus",
                    defaultValue
                })
            }

        } else {
            dispatch({
                type: "valueIsBoolean"
            })
        }
    }

    return [
        state.value.toString(),
        toggle
    ]
}