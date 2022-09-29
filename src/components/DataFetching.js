import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(({data}) => {
                setPost(data)
            }).catch(err => {
                console.log(err);
            })
    },[idFromButtonClick])
    //without [] it will make inifinite api call on each render

    let onInputChangeHandler = () =>{
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={onInputChangeHandler }>search</button>
            <div>{post.title}</div>
            <ul>
                {/* {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                } */}
            </ul>
        </div>
    )

}
export default DataFetching;