import React from "react";

import PostComment from "./postComment";

import Homer from "../../assets/profile_homer.png";

function post() {
  return (
    <section className="post">
      <div>
        <img src={Homer} />
        <div>
          <p className="name">Homer Simpson</p>
          <p>Hoje</p>
        </div>
      </div>
      <p>Alguém viu o Bart por ai?</p>
      <hr />
      <PostComment />
      <PostComment />
    </section>
  );
}

export default post;
