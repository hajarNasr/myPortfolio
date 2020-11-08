const Post = ({ post }) => {
  return (
    <div className="post-wrapper">
      <div>
        <img src={post.social_image} width="100%" height="65%" />
      </div>
      <div className="post-info">
        <a href={`https://dev.to${post.path}`} target="_blanck">
          {post.title}
        </a>
        <p>
          {post.readable_publish_date}, {post.published_at.split("-")[0]}
        </p>
        <ul className="tags-list">
          {post.tag_list.map((tag) => (
            <li key={`${post.title}-${tag}`}>{tag}</li>
          ))}
        </ul>
        <p>{post.public_reactions_count}</p>
      </div>
      <style jsx>
        {`
          .post-wrapper {
            min-height: 280px;
          }
          .post-info {
            padding: 5px 5px 0 5px;
          }
          .tags-list {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
            width: 90%;
            margin: auto;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
};

export default Post;
