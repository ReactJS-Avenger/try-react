import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                setPosts(data)
            }).catch(err => {
                console.log(err);
            })
    },[])
    //without [] it will make inifinite api call on each render

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )

}
export default DataFetching;