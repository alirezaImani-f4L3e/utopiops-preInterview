import Post from "./Post"
import { useLayoutEffect } from "react";

const Posts = (props) => {

    const posts =props.posts.map(post =>{if(post.userId ==props.chosen)return <Post post={post} key={`${post.id}`}/>})
    
    return (
        <div className="posts-list">
            <h1 className="post-list-title" >{`User ${props.chosen}`}</h1>
            <ul className="lists-container">
                {posts}
                
            </ul>
        </div>
    );
}

export default Posts;
