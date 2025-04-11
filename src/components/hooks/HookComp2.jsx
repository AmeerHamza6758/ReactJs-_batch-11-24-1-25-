import React, { useEffect, useState } from 'react'

function HookComp2() {
    const [seconds, setSeconds]=useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div>Time Start {seconds}</div>
    )
}

export default HookComp2
