import React, { Fragment } from 'react'
import CompB from './CompB'

function CompA() {
    const name = 'Fahad Hamza'
    function showGreetings(){
        alert('The Event is Called with onClick event')
    }
    return (
        <Fragment>
            <div style={{ backgroundColor: 'red' }}><p>Hello I'm compo A and the name  is {name}</p>
            <button onClick={showGreetings}>Click Me</button></div>
            <CompB name={name}/>
        </Fragment>
    )
}

export default CompA