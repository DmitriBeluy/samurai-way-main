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
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>

    )
}

export default MyPosts;