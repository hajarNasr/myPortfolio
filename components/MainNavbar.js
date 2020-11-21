import RadioInput from "../components/RadioInput";
const MainNavbar = () => {
  return (
    <div id="navbar-wrapper">
      <navbar className="main-nav">
        <div id="navbar-slider">
          <RadioInput
            id="1"
            to="/"
            ariaLabel="Home"
            activeStyle={{
              background: "gray",
              border: "3px solid whitesmoke",
            }}
          />
          <label htmlFor="1" data-navbar="Home" />
          <RadioInput
            id="2"
            to="/projects"
            ariaLabel="Projects"
            activeStyle={{
              background: "#943C3C",
              border: "3px solid gray",
            }}
          />
          <label htmlFor="2" data-navbar="Projects" />

          <RadioInput
            id="5"
            to="/blog"
            ariaLabel="Blog"
            activeStyle={{ background: "#436671", border: "3px solid white" }}
          />
          <label htmlFor="5" data-navbar="Blog" />
          <RadioInput
            id="3"
            to="/about"
            ariaLabel="About"
            activeStyle={{ background: "#867E8F", border: "3px solid white" }}
          />
          <label htmlFor="3" data-navbar="About" />
          <RadioInput
            id="4"
            to="/contact"
            ariaLabel="Contact"
            activeStyle={{ background: "#4d7a6a", border: "3px solid white" }}
          />
          <label htmlFor="4" data-navbar="Contact" />
        </div>
      </navbar>

      <style jsx global>
        {`
          .main-nav {
            position: fixed;
            top: 0;
            z-index: 99999;
            width: 5%;
            left: 70px;
          }
          navbar {
            width: 90%;
            max-width: 500px;
          }
          navbar #navbar-slider {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 90vh;
            user-select: none;
          }
          navbar #navbar-slider::before {
            content: " ";
            position: absolute;
            height: 100vh;
            width: 2.5px;
            top: 0;
            left: 15%;
            background: whitesmoke;
          }
          navbar #navbar-slider input,
          navbar #navbar-slider label {
            box-sizing: border-box;
            flex: 1;
            user-select: none;
            cursor: pointer;
          }

          navbar #navbar-slider label {
            display: inline-block;
            position: relative;
            width: 20%;
            height: 100%;
            user-select: none;
          }
          navbar #navbar-slider label::before {
            content: attr(data-navbar);
            position: absolute;
            left: 75%;
            padding-top: 15px;
            margin-top: 25px;
            transform: translate(-50%, 45px);
            font-size: 14px;
            letter-spacing: 0.4px;
            font-weight: 500;
            white-space: nowrap;
            opacity: 0.85;
            transition: all 0.15s ease-in-out;
            color: #943c3c;
          }
          navbar #navbar-slider label::after {
            content: " ";
            position: absolute;
            left: 75%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            border: 2px solid whitesmoke;
            background: #fff;
            border-radius: 50%;
            pointer-events: none;
            user-select: none;
            z-index: 1;
            cursor: pointer;
            transition: all 0.15s ease-in-out;
          }
          navbar #navbar-slider label:hover::after {
            transform: translate(-50%, -50%) scale(1.25);
          }
          navbar #navbar-slider input {
            display: none;
          }
          navbar #navbar-slider input:checked + label::before {
            font-weight: 800;
            opacity: 1;
          }
          navbar #navbar-slider input:checked + label::after {
            border-width: 4px;
            transform: translate(-50%, -50%) scale(0.75);
          }

          navbar:valid #navbar-slider input + label::before {
            transform: translate(-50%, 45px) scale(0.9);
            transition: all 0.15s linear;
          }
          navbar:valid #navbar-slider input:checked + label::before {
            transform: translate(-50%, 45px) scale(1.1);
            transition: all 0.15s linear;
          }
          @media (max-width: 550px) {
            .main-nav {
              left: 50px;
            }
          }
          @media (max-height: 600px) {
            navbar #navbar-slider label::before {
              margin-top: 25px;
              padding-top: 7px;
            }
          }
          @media (max-height: 440px) {
            navbar #navbar-slider label::before {
              content: "";
            }
          }
        `}
      </style>
    </div>
  );
};

export default MainNavbar;
