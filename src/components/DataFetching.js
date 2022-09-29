import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(({data}) => {
                setPost(data)
            }).catch(err => {
                console.log(err);
            })
    },[id])
    //without [] it will make inifinite api call on each render

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
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