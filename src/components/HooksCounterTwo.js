import { useState } from "react";

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>incrementCount</button>
            <button onClick={() => setCount(count - 1)}>decrementCount</button>
            <button onClick={incrementFive}>incrementCount by 5</button>
        </div>
    )
}

export default HookCounterTwo;