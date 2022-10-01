import React, { useMemo, useState } from "react";

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    // useMemoReturn the cached value
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count two - {counterTwo}</button>
            </div>
        </div>
    )

}
export default Counter;

// we need to tell react not to calculate counterOne is odd/Even when we click on counterTwo
//usememo will only recompute cached value when one of the depedency is changed..it works similiar to useCallback
//useCallback - caches the provided fucntion instance itself(cache fucntion)
//useMemo - invlokes provided fucntion and caches its result(cache result of invoked fucntion)
