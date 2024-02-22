import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [results, setResults] = useState([]);


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setResults(data))
        console.log(results);
    }, [])

    return results;
}

export default useFetch