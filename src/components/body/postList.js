import React, { Component } from "react";

import Post from "./post";

class postList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Rogério Tavares",
          avatar: "https://avatars0.githubusercontent.com/u/7569937?s=460&v=4"
        },
        date: "09 Mar 2020",
        content:
          "Proin porttitor malesuada ipsum, et sagittis quam cursus quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
        comments: [
          {
            id: 1,
            author: {
              name: "Filipe Deschamps",
              avatar:
                "https://avatars3.githubusercontent.com/u/4248081?s=460&v=4"
            },
            content:
              "Cras convallis malesuada velit, vel dictum felis egestas id. Aenean ut ligula nec lectus luctus ultricies. In accumsan ullamcorper urna interdum tincidunt. Sed ut facilisis sapien. Phasellus ornare lacinia dui, varius consectetur tortor tempor sed. Donec pretium rhoncus turpis sit amet scelerisque. Vivamus lacus neque, fringilla id volutpat non, aliquet eget metus. Integer id aliquam sem, sed molestie est. Morbi facilisis lobortis magna non aliquam. Nullam maximus neque ac risus vestibulum, eu laoreet arcu lacinia. In laoreet tempus massa at efficitur. Curabitur malesuada iaculis ante sit amet blandit. Curabitur vitae tristique velit."
          },
          {
            id: 2,
            author: {
              name: "Linus Torvalds",
              avatar:
                "https://avatars0.githubusercontent.com/u/1024025?s=460&v=4"
            },
            content:
              "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Brendan Eich",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
        },
        date: "09 Mar 2020",
        content:
          "Curabitur viverra, metus auctor auctor mattis, est augue scelerisque tellus, eu pretium justo neque vitae quam.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rogério Tavares",
              avatar:
                "https://avatars0.githubusercontent.com/u/7569937?s=460&v=4"
            },
            content:
              "Aenean mi mi, feugiat et leo ac, gravida luctus eros. Nunc vehicula risus lectus, sed auctor justo porttitor quis."
          },
          {
            id: 2,
            author: {
              name: "Linus Torvalds",
              avatar:
                "https://avatars0.githubusercontent.com/u/1024025?s=460&v=4"
            },
            content:
              "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
          }
        ]
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </>
    );
  }
}

export default postList;
