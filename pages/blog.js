import Post from "../components/Post";

const Blog = ({ devToPosts }) => {
  return (
    <div className="blog-wrapper">
      {console.log(devToPosts)}
      {devToPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <style jsx global>
        {`
          .blog-wrapper {
            width: 90%;
            display: grid;
            grid-gap: 25px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            margin: auto;
            padding-bottom: 30px;
            min-height: 80vh;
            margin-top: 100px;
          }
        `}
      </style>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const request = await fetch("https://dev.to/api/articles?username=hajarnasr");
  const json = await request.json();

  return {
    props: {
      devToPosts: json,
    },
  };
}
