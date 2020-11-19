import Post from "../components/Post";
import Head from "next/head";

const Blog = ({ devToPosts }) => {
  return (
    <main className="blog-wrapper">
      <Head>
        <title>Blog</title>
      </Head>
      {devToPosts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <style jsx global>
        {`
          body {
            background: #aecbc1;
          }
          .blog-wrapper {
            width: 90%;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            margin: auto;
            padding-bottom: 30px;
            min-height: 80vh;
            margin-top: 100px;
          }
          @media (max-width: 400px) {
            .blog-wrapper {
              grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
              margin-left: 10px !important;
            }
          }
        `}
      </style>
    </main>
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
