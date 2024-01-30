import { useEffect, useRef } from "react"

export function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        console.log(firstRenderRef.current)
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }

        return callback()
    }, dependencies)

}