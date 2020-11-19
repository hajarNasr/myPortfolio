const FilterByTech = ({ onFilter }) => {
  return (
    <div className="filter-by-tech">
      <div className="tech-logos">
        {logosInfo.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            title={logo.name}
            role="button"
            onClick={() => onFilter(logo.name)}
          />
        ))}
      </div>
      <style jsx global>
        {`
          .filter-by-tech,
          .tech-logos {
            display: flex;
            align-items: center;
          }
          .filter-by-tech {
            width: 70%;
            margin: auto;
            justify-content: space-around;
          }
          .filter-by-tech h3 {
            color: #943c3c;
            padding-left: 10px;
          }
          .tech-logos {
            flex: 1;
            justify-content: space-evenly;
            padding-top: 70px;
          }
          .tech-logos img {
            cursor: pointer;
          }
          .tech-logos img:hover {
            transform: scale(1.1);
          }
          @media (max-width: 400px) {
            .filter-by {
              display: none !important;
            }
            .filter-by-tech {
              box-shadow: none;
              padding-top: 10px;
            }
            .tech-logos img {
              width: 30px;
              height: 30px;
            }
          }
          @media (max-width: 700px) {
            .filter-by-tech {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FilterByTech;

const logosInfo = [
  {
    name: "React",
    src: "https://img.icons8.com/plasticine/50/000000/react.png",
    width: "40",
    height: "40",
    alt: "React",
  },
  {
    name: "Nextjs",
    src: "/next-js.svg",
    width: "30",
    height: "30",
    alt: "Nextjs",
  },
  {
    name: "Redux",
    src: "https://img.icons8.com/color/48/000000/redux.png",
    width: "35",
    height: "35",
    alt: " Redux",
  },
  {
    name: "Expressjs",
    src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    width: "80",
    height: "40",
    alt: "Expressjs",
  },
  {
    name: "Django",
    src: "https://img.icons8.com/color/48/000000/django.png",
    width: "40",
    height: "50",
    alt: "Django",
  },
  {
    name: "Firebse",
    src: "https://img.icons8.com/color/48/000000/firebase.png",
    width: "40",
    height: "40",
    alt: "Firebase",
  },
  {
    name: "MongoDB",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
    width: "40",
    height: "40",
    alt: "MongoDB",
  },
];
