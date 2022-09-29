import { useEffect, useState } from "react";

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        let interval = setInterval(tick, 1000);

        return () => {
            clearImmediate(interval)
        }
    }, [])

    return (
        <div>
            {count}
        </div>
    )

}
export default IntervalHookCounter;