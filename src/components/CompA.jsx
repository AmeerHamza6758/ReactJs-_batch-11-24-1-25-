import React, { Fragment } from 'react'
import CompB from './CompB'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/CounterSlice'

function CompA() {
    // const name = 'Fahad Hamza'
    function showGreetings() {
        alert('The Event is Called with onClick event')
    }
    const { count, name } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        // <Fragment>
        //     <div style={{ backgroundColor: 'red' }}><p>Hello I'm compo A and the name  is {name}</p>
        //     <button onClick={showGreetings}>Click Me</button></div>
        //     <CompB name={name}/>
        // </Fragment>

        <>
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Add to cart</button>
            <button onClick={() => dispatch(decrement())}>Remove to cart</button>
        </>
    )
}

export default CompA