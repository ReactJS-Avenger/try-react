import { useEffect, useState } from "react";
import { Tools } from "../../Utils/Tools";

const LeftDiv = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredTool, setFilteredTool] = useState([])

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const clickHandler = (url) => {
        window.open(url)
    }

    useEffect(()=>{
        let value = Tools?.filter((tool) => tool?.name?.toLowerCase().includes(inputValue?.toLowerCase()))
        setFilteredTool(value)
    }, [inputValue])

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
                    filteredTool?.map((tool) => (
                        <div className="outer-tool">
                            <button className="tool-click" onClick={() => clickHandler(tool.externalUrl)}>
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