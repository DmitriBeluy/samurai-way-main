import React from 'react';
import s from './Post.module.css'

function Post() {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg" alt=""/>
            post 1
            <div>
                <span><button>Like</button></span>
            </div>
        </div>
    )
}

export default Post;