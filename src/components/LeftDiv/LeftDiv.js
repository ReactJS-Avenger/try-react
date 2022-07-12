import { useState } from "react";
import { Tools } from "../../Utils/Tools";

const LeftDiv = () => {
    const [inputValue, setInputValue] = useState('');

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <div className="left-div">
            <div className="search-bar">
                <input 
                type='text'
                placeholder="Search Name"
                value={inputValue}
                maxLength={30}
                onChange={inputChangeHandler}
                />
            </div>
            <div className="tools-container">
                {
                    Tools?.map((tool) => (
                        <div className="outer-tool">
                            <button className="tool-click">
                                <img src={tool.img} alt='tool-logo'/>
                                <span className="tool-name">{tool.name}</span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default LeftDiv;