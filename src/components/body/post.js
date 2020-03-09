import React from "react";

import PostComment from "./postComment";

function post({ post }) {
  return (
    <section className="post">
      <div>
        <img src={post.author.avatar} />
        <div>
          <p className="name">{post.author.name}</p>
          <p>{post.date}</p>
        </div>
      </div>
      <p>{post.content}</p>
      <hr />
      {post.comments.map(comment => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </section>
  );
}

export default post;
