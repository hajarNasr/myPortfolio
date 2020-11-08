const Post = ({ post }) => {
  return (
    <div className="post-wrapper">
      <div>
        <img src={post.social_image} width="100%" height="65%" />
      </div>
      <div className="post-info">
        <a href={`https://dev.to${post.path}`} target="_blanck">
          <span className="title">{post.title} </span>
        </a>

        <span className="date">
          {post.readable_publish_date}, {post.published_at.split("-")[0]}
        </span>
      </div>
      <style jsx global>
        {`
          .post-wrapper {
            min-height: 280px;
            background: #fdfbf7;
            border-radius: 5px;
            border: 1.5px solid gray;
          }
          .post-wrapper img {
            border-radius: 5px;
          }
          .post-info {
            padding: 5px 5px 0 5px;
          }
          .title {
            font-size: 1.3rem;
            font-weight: 480;
            color: #176447;
          }
          .title:hover {
            border-top: 1px solid #176447;
          }
          .date {
            font-size: 14px;
            margin-top: 5px;
            color: gray;
            display: block;
            padding-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Post;
