import React, { Component } from "react";
import Post from "../Post";
import { formatDate } from "../../utils";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    // TODO: update url
    fetch("http://wpreb.x10host.com/wp-json/wp/v2/posts")
      .then(data => data.json())
      .then(posts => {
        const mappedPosts = posts.map(post => {
          return {
            id: post.id,
            date: formatDate(new Date(post.date)),
            title: post.title.rendered,
            type: post.type,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            url: `/blog/${post.slug}`,
            // TODO: get smaller images for mobile.
            image: (post.acf && post.acf.image) || ""
          };
        });
        this.setState({
          posts: mappedPosts
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="eats-posts-wrapper">
        <div className="eats-posts">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
