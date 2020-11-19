import MainSvg from "./MainSvg";
import { Twitter, Github, Linkedin, DevTo } from "./FAIcons";

const Main = () => {
  const [openHello, closeHello] = ["<hello>", "</hello>"];
  return (
    <main className="main-page">
      <div className="main-page__left">
        <h1>
          <code>{openHello}</code>
          <div className="hello-msg">
            <p>I'm Hajar Nasr,</p>
            <p>Aspiring web developer.</p>
          </div>
          <code>{closeHello}</code>
        </h1>
        <ul className="social-links">
          <SocialLink
            href="https://www.twitter.com/hjarnasr/"
            ariaLabel="Twitter account"
            child={<Twitter />}
          />

          <SocialLink
            href="https://dev.to/hajarnasr"
            ariaLabel="dev.to account"
            child={<DevTo />}
          />

          <SocialLink
            href="https://www.github.com/hajarNasr/"
            ariaLabel="Github account"
            child={<Github />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/hajar-nasr-85923b1b5/"
            ariaLabel="Linkedin account"
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
          width: 100%;
        }
        .main-page__left {
          line-height: 1.2;
          color: rgba(81, 81, 87, 0.829);
          margin-left: 20px;
          font-weight: 500;
          font-size: 0.9rem;
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
          padding-top: 10px;
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
        @media (max-width: 350px) {
          .main-page__left {
            font-size: 0.7rem;
            margin-left: -10px;
            width: 100%;
            line-height: 1.8;
          }
          .hello-msg {
            margin-left: 15px;
          }
        }
        @media (min-width: 750px) and (max-width: 1100px) {
          .main-page {
            justify-content: space-evenly !importtant;
          }
          .main-page__left {
            margin-left: 40px;
            font-size: 0.75rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </main>
  );
};

export default Main;

const SocialLink = ({ href, ariaLabel, child }) => (
  <li>
    <a target="_blank" href={href} aria-label={ariaLabel} rel="noopener">
      {child}
    </a>
  </li>
);
