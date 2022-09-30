import { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    // by making action as a object we can make use of the value in reducer
    // we can have both state and action as a object
    // this  pattern is helpful to maintain the state globally
    console.log("~~~~~~~~~~~~~~~~~~~~~", state);
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterTwoReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>

            <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>Decrement2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )

}
export default CounterTwoReducer;