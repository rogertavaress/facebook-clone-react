import React from "react";

function postComment({ comment }) {
  return (
    <div className="comments">
      <img src={comment.author.avatar} />
      <p>
        <strong>{comment.author.name}</strong> {comment.content}
      </p>
    </div>
  );
}

export default postComment;
