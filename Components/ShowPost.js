import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';
import Loading from './Loading';
import axios from 'axios';

const ShowPost = () => {
    const id = useParams().id
    const [post, setpost] = useState({})
    const [loading, setloading] = useState(true)
    console.log(id)
    useEffect(() => {
        console.log(id)
        //console.log(id)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                var postdata = response.data
                setpost(postdata)
                setloading(false)
            }).catch(error => console.log(error))
    }, [id])
    console.log(post)

    return (
        <React.Fragment>

            {loading ? <Loading /> :
                <>
                    <h2>
                        Post: {post.id}
                    </h2>
                    <div className='post'>
                        <label >User Id: {post.userId}</label>
                        <label >Id: {post.id}</label>
                        <label >Title: {post.title}</label>
                        <label >Body: {post.body}</label>
                    </div>
                </>
            }

        </React.Fragment>

    );
}

export default ShowPost;
