import React, { useRef, useState } from 'react'

function Child() {
    const [name, setName] = useState("Name")
    const ref = useRef()

    const changeName = (e) => {
        setName(ref.current.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type='text' ref={ref} />
            <input type="submit" onClick={changeName} value="Update value" />
        </div>
    )
}

export default Child
