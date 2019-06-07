import React, { useReducer } from 'react'

function UseReducer() {


    function reducer(count, action) {
        return (action === 'increment') ? count + 1 : count - 1
    }

    const [count, updateCount] = useReducer(reducer, 0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => updateCount('increment')}>Increment</button>
            <button onClick={() => updateCount('decrement')}>Decrement</button>
        </div>
    )
}

export default UseReducer
