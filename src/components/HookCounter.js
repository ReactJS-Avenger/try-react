import React, { useState } from "react";

const HooksCounter = () => {
    const [count, setCount] = useState(0);
    // useState accepts initial value and return pair of values. currentValue and a method that can update the state
    // above is array destructuring.
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksCounter;

// Rules of Hooks
// 1. only call hooks at the Top level
// 2. Don't call hooks inside loops, conditions, or nested functions.
// 3. Only call hooks from react functions
// 4. call them from within react functional component and not just any regular javascript functions.