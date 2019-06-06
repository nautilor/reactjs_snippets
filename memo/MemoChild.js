import React from 'react'

function MemoChild({value}) {
    console.log('The MemoChild is updating corresponding to the Parent')
    return (
        <div>
           <h1>{value}</h1> 
        </div>
    )
}

export default React.memo(MemoChild)