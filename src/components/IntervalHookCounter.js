import { useEffect, useState } from "react";

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        let interval = setInterval(tick, 1000);

        return () => {
            clearImmediate(interval)
        }
    }, [count ])

    return (
        <div>
            {count}
        </div>
    )

}
export default IntervalHookCounter;