import Head from "next/head";
const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>About Me</h1>
        <article>
          <p>
            <span>
              Hiii! I'm Hajar from Egypt, trying to break into the tech world,
              and looking for new opportunities to help me expand my knowledge
              in coding.
            </span>
            <span>
              I'm currently participating in{" "}
              <a target="_blanck" href="https://the-collab-lab.codes/">
                The Collab Lab
              </a>
              , building a React/Firebase shopping app and collaborating with an
              amazing team of talented developers and mentors.
            </span>
            <span>
              I love nature, the trees, the birds, and my favorite is the wind.
            </span>
            <span>Sometimes I write.</span>
            <span>Thank you for being here.</span>
          </p>
        </article>
      </main>
      <style jsx global>{`
        body {
          background: #ddd6d6;
        }
        main {
          display: flex;
          flex-direction: column;
          align-items: space-between;
          margin-auto;
        }
        h1 {
          text-align: center;
          color: #5d5369;
        }
        article {
          width: 55%;
          margin: auto;
          margin-top:20px;
          display: flex;
          justify-content: space-around;
          background: #ddd6d6;
          border: 5px solid #f7f4f5;
          box-shadow: 1px 0px 8px 3px rgba(151, 124, 124, 0.486);
        }
        p {
          width: 95%;
          margin: auto;
          padding: 15px;
          display: flex;
          flex-direction: column;
          color: rgb(80, 79, 79);
          line-height: 2.1;
        }
        article a{
          color:#5d5399;
        }
        p span {
          margin-top: 15px;
        }
        @media (max-width: 1000px){
          article {
            width: 75%;
          }
        }
        @media (max-width: 680px) {
          article {
            width: 95%;
          }
        }
      `}</style>
    </>
  );
};

export default About;
