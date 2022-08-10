import React from 'react';
import s from './Post.module.css'



function Post(props:any) {
    return (
        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511862_19.jpg" alt=""/>
            {props.message}
            <div>
                <span><button>Like</button></span>
                <span>{props.likesCount}</span>
            </div>
        </div>

    )
}

export default Post;