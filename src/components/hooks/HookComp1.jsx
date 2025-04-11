import React, { useState } from 'react'

function HookComp1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState()

    const handleIncrement = () => { 
        setCount(count+1)
    }

    const handleDecrement = () => {
        setCount(count-1)
     }

        return (
        <div><h2>We are learning UseState hook.Count={count}</h2>

            <button onClick={handleIncrement}>+Add to cart</button> <button onClick={handleDecrement}>-Remove to cart</button></div>
    )
}

export default HookComp1