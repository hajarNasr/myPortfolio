import Link from "next/link";
const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>HN</a>
    </Link>
    <style jsx>{`
      .logo {
        width: 45px;
        height: 45px;
        position: absolute;
        right: 35px;
        top: 20px;
        border: 5px solid gray;
        color: brown;
        background: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
      }
      @media (max-width: 650px) {
        .logo {
          top: 20px;
          right: 10px;
        }
      }
    `}</style>
  </div>
);

export default Logo;
