const FilterByTech = ({ onFilter }) => {
  return (
    <div className="filter-by-tech">
      <h3>Filter by:</h3>
      <div className="tech-logos">
        {logosInfo.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            title={logo.name}
            onClick={() => onFilter(logo.name)}
          />
        ))}
      </div>
      <style jsx>
        {`
          .filter-by-tech,
          .tech-logos {
            display: flex;
            align-items: center;
          }
          .filter-by-tech {
            height: 65px;
            width: 70%;
            margin: auto;
            margin-bottom: 35px;
            justify-content: space-around;
            border-radius: 5px;
            box-shadow: 0px 3px 5px lightgray, 0px -3px 5px lightgray;
          }
          .filter-by-tech h3 {
            color: #943c3c;
            padding-left: 10px;
          }
          .tech-logos {
            flex: 1;
            justify-content: space-evenly;
          }
          .tech-logos img {
            cursor: pointer;
          }
          .tech-logos img:hover {
            transform: scale(1.1);
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
    alt: " React's logo",
  },
  {
    name: "Nextjs",
    src: "/next-js.svg",
    width: "30",
    height: "30",
    alt: "Nextjs's logo",
  },
  {
    name: "Redux",
    src: "https://img.icons8.com/color/48/000000/redux.png",
    width: "35",
    height: "35",
    alt: " Redux's logo",
  },
  {
    name: "Expressjs",
    src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    width: "80",
    height: "40",
    alt: "Expressjs's logo",
  },
  {
    name: "Django",
    src: "https://img.icons8.com/color/48/000000/django.png",
    width: "40",
    height: "50",
    alt: "Django's logo",
  },
  {
    name: "Firebse",
    src: "https://img.icons8.com/color/48/000000/firebase.png",
    width: "40",
    height: "40",
    alt: "Firebase's logo",
  },
  {
    name: "MongoDB",
    src: "https://img.icons8.com/color/48/000000/mongodb.png",
    width: "40",
    height: "40",
    alt: "Mongodb's logo",
  },
];
