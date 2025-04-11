import React, { useState } from 'react'
import CompA from '../CompA'

function ConditionalRendering() {
    const [isLoggedIn, setIsloggedIn] = useState(false)
    const [openModal, setOpenModal]=useState(false)
    return (
        <div>
            {isLoggedIn ? (<div style={{ fontSize: '30px' }}>Thank you for Register Yourself</div>)
                : (<div style={{ fontSize: '50px', color: 'red' }}>Please Register Yourself</div>)}
            {isLoggedIn && <h2>You are a lucky Student...!</h2>}


            <button onClick={()=>setOpenModal(!openModal)}>Open Modal</button>

            {openModal && <CompA/>}
        </div>
    )
}

export default ConditionalRendering