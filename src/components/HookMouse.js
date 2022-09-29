import { useEffect, useState } from "react";

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePoistion = e => {
        console.log('mouseEvent');
        setX(e.clientX);
        setY(e.clientY)
    }

    //effect is called after everny render.unless we specify the dependecy
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePoistion)
    }, [])

    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
}
export default HookMouse;