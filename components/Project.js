import LazyLoadImage from "./LazyLoadImage";
const Project = ({ project }) => {
  const [demo, code] = ["<Demo/>", "<Code/>"];
  return (
    <div className="project-wrapper">
      <div className="img-wrapper">
        <LazyLoadImage src={project.image} alt={project.alt} />
      </div>
      <div className="overlay">
        <a href={`${project.github}`} target="_blank" rel="noopener">
          <code>{code}</code>
        </a>

        <a href={`${project.demoLink}`} target="_blank" rel="noopener">
          <code>{demo}</code>
        </a>
      </div>
      <style jsx>{`
        .project-wrapper {
          height: 380px;
          position: relative;
        }

        .overlay,
        .overlay a {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
        }

        .overlay {
          height: 380px;
          position: absolute;
          top: 0;
          width: 100%;
          background: rgba(128, 128, 128, 0.616);
          height: 0px;
        }
        .overlay a:first-child {
          background: lightgray;
          color: brown;
          font-weight: bold;
        }
        .overlay a:last-child {
          background-color: rgba(116, 65, 65, 0.911);
          color: lightgray;
        }
        .overlay a {
          padding: 5px;
          height: 15%;
          margin-right: 4px;
          text-align: center;
          opacity: 0;
        }

        .overlay a:hover {
          border: 1px solid white;
        }
        .project-wrapper:hover > .overlay {
          animation: change-height 0.5s ease-in-out 0s;
          animation-direction: alternate;
          animation-fill-mode: both;
        }
        .project-wrapper:hover > .overlay > a {
          opacity: 1;
        }
        @keyframes change-height {
          from {
            height: 0%;
          }
          to {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
