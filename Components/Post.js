import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    console.log(post)

    return ( 
        <div className='post'>
            <label >User Id: {post.userId}</label>
            <label >Id: {post.id}</label>
            <label >Title: {post.title}</label>
            <label >Body: {post.body}</label>
            <Link to={'/'+post.id}>
                <button>Show Detail</button>
            </Link>
        </div>
     );
}
 
export default Post;
