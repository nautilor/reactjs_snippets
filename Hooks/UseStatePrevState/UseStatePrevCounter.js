import React, { useState } from 'react'

function useStateCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    const notIncrementingFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br />
            <button onClick={notIncrementingFive}>Not Working Increment 5</button>
            <button onClick={incrementFive}>Working Increment 5</button>
        </div>
    )
}

export default useStateCounter
