import React, { Component } from "react";

import Post from "./post";

class postList extends Component {
  render() {
    return (
      <>
        <Post />
        <Post />
        <Post />
      </>
    );
  }
}

export default postList;
