import React from "react";
import { userContext, channelContext } from "../../App";

// using render props pattern
const ComponentF = () => {
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (
                            <channelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value is {user} and {channel}</div>
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}
export default ComponentF;