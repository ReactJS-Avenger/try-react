import { useState } from "react";

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // when we want to update the state based on the previous value
            setCount(prevCount => prevCount + 1)// we can pass function which has previous value to setCount
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>incrementCount</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>decrementCount</button>
            <button onClick={incrementFive}>incrementCount by 5</button>
        </div>
    )
}

export default HookCounterTwo;