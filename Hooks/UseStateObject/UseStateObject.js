import React, { useState } from 'react'

function useStateCounter() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <br />
            <input type='text' placeholder='first name'
                value={name.fistName} onChange={e => setName({ ...name, firstName: e.target.value })} />
            <input type='text' placeholder='last name'
                value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
        </div>
    )
}

export default useStateCounter
