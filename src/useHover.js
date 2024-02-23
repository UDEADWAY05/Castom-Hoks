import { useEffect, useRef, useState } from "react"

function AddEvent(ref, setValue) {
    ref.current.addEventListener("mousemove", () => {
        setValue(true)
    })
    ref.current.addEventListener("mouseleave", () => {
        setValue(false)
    })
}

export function useHover() {
    const [hovered, setHovered] = useState(false)
    const isWentAddEvent = useRef(true)
    const ref = useRef()



    useEffect(() => {
        if (ref.current !== undefined && isWentAddEvent.current) {
            AddEvent(ref, setHovered)
            isWentAddEvent.current = true
        }
    }, [ref])

    return {
        hovered,
        ref
    }
}