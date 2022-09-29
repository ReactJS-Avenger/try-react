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
    // we can pass cleanup function to the fuction passed to useeffect, which retun fucntion is cleanup fucntion, runs after component unmount
    
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePoistion)

        //whatevern we return from here will be executed once the compoent unmounts
        // cleanup fucntions
        return () => {
            console.log('component unmount cleanup code');
            window.removeEventListener('mousemove', logMousePoistion)
        }

    }, [])

    // we can not removed the event attched this will result in memory leak and warnign in the console
    // make sure once you unmount the component, you remove all subscritpion/ events attached

    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
}
export default HookMouse;