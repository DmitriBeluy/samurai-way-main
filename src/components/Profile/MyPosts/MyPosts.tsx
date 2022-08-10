import React from 'react';
import s from './Myposts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
            <textarea></textarea>
            <button>Add post</button>
            </div>
            <Post message="Hi, how are you?" likesCount={25}/>
            <Post message="It`s my first post" likesCount={15}/>
        </div>

    )
}

export default MyPosts;