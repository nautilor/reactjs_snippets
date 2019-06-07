import React, { useState } from 'react'

function useStateCounter() {

    const [count, incrementCounter] = useState(0)

    return (
        <div>
            <button onClick={() => incrementCounter(count + 1)}>Pressed {count}</button>
        </div>
    )
}

export default useStateCounter
