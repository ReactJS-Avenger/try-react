import React from "react";
import { userContext } from "../../App";

// using render props pattern
const ComponentF = () =>{
    return(
        <div>
            <userContext.Consumer>
                {
                    user =>{
                        return <div>User context value is {user}</div>
                    }
                }
            </userContext.Consumer>
        </div>
    )
}
export default ComponentF;