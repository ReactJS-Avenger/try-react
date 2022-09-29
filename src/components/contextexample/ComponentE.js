import { useContext } from "react";
import { userContext, channelContext } from "../../App";
import ComponentF from "./ComponentF";

const ComponentE = () =>{

    const user = useContext(userContext);
    const channel = useContext(channelContext)

    return(
        <div>
            <ComponentF/>
            <div>
                useContext Hooks - 
                {user}- {channel}
            </div>
        </div>
    )
}
export default ComponentE;