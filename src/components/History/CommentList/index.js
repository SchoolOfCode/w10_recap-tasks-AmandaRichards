import React from 'react';
import articles from '../../../libs/articles';
import {Comment} from "../../Facts/Comment" 



export function HistoryCommentList() {
    const comments = articles[1].comments;
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
