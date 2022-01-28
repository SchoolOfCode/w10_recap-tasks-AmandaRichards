import React from 'react';
import articles from '../../../libs/articles';
import {Comment} from "../Comment" 



export function CommentList() {
    const comments = articles[0].comments;
    return (
        <ul>
            {comments.map((comment, index) => {
                return (
                    <Comment
                        key={comment.id}
                        username={comment.name}
                        comment={comment.text} />
                );
            })}

        </ul>);
}

