import React, { useState, useEffect } from 'react'

function UseEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating document title')
        document.title = count
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>clicked {count}</button>
            <input type='text' onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default UseEffect
