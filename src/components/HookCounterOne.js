import { useEffect, useState } from "react";

const HookCounterOne = () => {

    const [count, setCounter] = useState(0);

    // to useEffect we pass the function which get executed after every render of the component.i.e useEffect runs after every render.
    // it runs on first render and after every update.
    // useEffect is used inside the component. So that we can have access both state and props.
    // this is how we can use useEffect to cause side effect in component.
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCounter(count + 1)}>Count {count}</button>
        </div>
    )
}
export default HookCounterOne;