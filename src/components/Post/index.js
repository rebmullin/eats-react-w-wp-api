import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

import "./styles.scss";

class Post extends React.Component {
  state = {
    post: [],
    isBlogLanding: true
  };
  componentDidMount() {
    if (!this.props.post) {
      const { slug } = this.props.match.params;

      // TODO: update url
      fetch(`http://wpreb.x10host.com/wp-json/wp/v2/posts?slug=${slug}`)
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
              image: (post.acf && post.acf.image) || ""
            };
          });
          this.setState({
            isBlogLanding: false,
            post: mappedPosts
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    let { post } = this.props;
    const { isBlogLanding } = this.state;

    if (!post) {
      post = this.state.post[0];
    }

    let content = "";
    if (post) {
      content = !isBlogLanding ? post.content : post.excerpt;
    }

    return post ? (
      <article
        className={["eats-post", post.image ? "eats-post--two-col" : ""].join(
          " "
        )}
        key={post.id}
      >
        <img className="eats-post-image" src={post.image} alt={post.title} />
        <div className="eats-post-content-wrapper">
          <time className="eats-post-date" dateTime={post.date}>
            {post.date}
          </time>
          <Link className="eats-post-link" to={post.url}>
            <h1
              className="eats-post-title"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
          </Link>
          <div
            className="eats-post-content"
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
          {isBlogLanding && (
            <a href={post.url} className="eats-post-link eats-post-read-more">
              Read More
              <i className="icon-cheveron-right" />
            </a>
          )}
        </div>
      </article>
    ) : null;
  }
}

export default Post;
