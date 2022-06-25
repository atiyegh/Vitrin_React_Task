import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "../Redux/postsSlice";
import Post from "./Post";
import Loading from './Loading';
import './Post.css';
import React , { useEffect } from 'react';

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    console.log(posts,postStatus,error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
            //console.log(posts)
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <Loading/>;
    } else if (postStatus === 'succeeded') {
        content = posts.map(post => <Post key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <React.Fragment>
            <h2>
                Posts List
            </h2>
            {
                <div className="post-section">{content}</div>
            }
        </React.Fragment>
        
    
     );
}

export default PostsList;
