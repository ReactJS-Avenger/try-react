import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            Hooks Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Interval</button>
        </div>
    )
}

export default HookTimer;
// useRef can hold reference to DOM node
// it can be also used to store any mutable values
// value will persist through the rerenders. while also not causing any additional renders when its value chanegs
// it will even remember the data store..even when other state value is changed
// above is a usecase