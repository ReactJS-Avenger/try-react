import { useState } from "react";

const HookCounterFour = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        // we need to manually merge the state
        // class based component will automatically merge the state
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default HookCounterFour;