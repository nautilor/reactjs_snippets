import React from 'react'

function NormalChild({value}) {
    console.log('The NormalChild is updating corresponding to the Parent')
    return (
        <div>
           <h1>{value}</h1> 
        </div>
    )
}

export default NormalChild