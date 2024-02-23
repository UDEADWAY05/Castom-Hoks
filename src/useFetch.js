import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()   
    
    async function fetchFunc({ params }) {
        setIsLoading(true)
        let src = url
        if (params) {
            src = `${url}?_limit=${params._limit}`
        }
        try {
            const res = await fetch(src).then((res) => res.json())
            setData(res)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }

    }

    useEffect(() => {
        fetchFunc({})
    }, [url])

    function refetch(params) {
        fetchFunc(params)
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}