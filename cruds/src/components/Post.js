import React, {useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import {PostsContext} from "./PostContext";

function findId(posts, id) {
    return posts.find(o => o.id === id);
}

export function Post({match}) {
    const posts = useContext(PostsContext)
    const post = findId(posts, Number(match.params.id))

    const [post, setPost] = useState({});
    
    useEffect(() => {
        fetch(`/posts/${match.params.id}`).then(response => response.json())
            .then(data => {setPost(data);
            });
    }, [match.params.id]);

    return (
        <div>{post.content}</div>
    )
}