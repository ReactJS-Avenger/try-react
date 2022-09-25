import { useState } from "react";


const HookCounterThree = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })
    return (
        <div>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({ firstName: e.target.value })}
            />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ lastName: e.target.value })}
            />
            <h2>First name is - {name.firstName}</h2>
            <h2>Last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree;