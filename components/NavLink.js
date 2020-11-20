import { cloneElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ href, id, activeStyle, children }) => {
  const router = useRouter();

  let activeLink = router.pathname === href ? id : "";

  return (
    <>
      <Link href={href}>{cloneElement(children)}</Link>

      <style jsx global>{`
        navbar #navbar-slider label[for="${activeLink}"]::after {
          width: 30px;
          height: 30px;
          background: ${activeStyle.background} !important;
          border: ${activeStyle.border};
        }
        navbar #navbar-slider label[for="${activeLink}"]::before {
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default NavLink;
