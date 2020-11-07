import MainSvg from "./MainSvg";
import { Twitter, Github, Linkedin, DevTo } from "./FAIcons";

const Main = () => {
  const [openHello, closeHello] = ["<hello>", "</hello>"];
  return (
    <main className="main-page">
      <div className="main-page__left">
        <code>{openHello}</code>
        <div className="hello-msg">
          <p>I'm Hajar Nasr.</p>
          <p>Aspiring web developer.</p>
        </div>
        <code>{closeHello}</code>
        <ul className="social-links">
          <SocialLink
            href="https://www.twitter.com/hjarnasr/"
            child={<Twitter />}
          />

          <SocialLink href="https://dev.to/hajarnasr" child={<DevTo />} />

          <SocialLink
            href="https://www.github.com/hajarNasr/"
            child={<Github />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/hajar-nasr-85923b1b5/"
            child={<Linkedin />}
          />
        </ul>
      </div>
      <MainSvg />
      <style jsx global>{`
        body {
          background-color: #d9dc3d;
        }
        .main-page {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: auto;
          height: 95vh;
        }
        .main-page__left {
          line-height: 0.5;
          color: rgba(81, 81, 87, 0.829);
          margin-left: 20px;
          font-size: 2rem;
          font-weight: 500;
          margin-top: 80px;
        }
        .hello-msg {
          display: block;
          margin-left: 25px;
        }
        .social-links {
          list-style: none;
          display: flex;
          font-size: 1.6rem;
          justify-content: space-evenly;
          align-items: center;
          padding: 0;
        }
        .social-links a {
          color: #6f7273;
          border-bottom: 2px solid whitesmoke;
        }
        code {
          color: #943c3c;
        }
        .social-links a:hover {
          color: whitesmoke;
        }
      `}</style>
    </main>
  );
};

export default Main;

const SocialLink = ({ href, child }) => (
  <li>
    <a target="_blank" href={href}>
      {child}
    </a>
  </li>
);