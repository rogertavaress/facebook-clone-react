import React, { Component } from "react";

import "./body.css";

import PostList from "./postList";

class body extends Component {
  render() {
    return (
      <main>
        <PostList />
      </main>
    );
  }
}

export default body;
