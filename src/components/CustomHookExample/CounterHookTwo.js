import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const CounterHookTwo = () => {
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    const [count, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            <h2>Count - {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )

}
export default CounterHookTwo;