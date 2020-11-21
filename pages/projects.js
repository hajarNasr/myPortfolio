import { useState } from "react";
import Head from "next/head";
import Project from "../components/Project";
import FilterByTech from "../components/FilterByTech";
const Projects = () => {
  let [projectsInfo, setProjectInfo] = useState(allProjectsInfo);

  const filterProjectsInfo = (name) => {
    /*allProjectsInfo is an object of all projects info at the bottom of this page*/
    setProjectInfo(
      allProjectsInfo.filter((project) => {
        const isExisted = project["tech"].indexOf(name) !== -1;
        if (isExisted) return project;
      })
    );
  };
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="projects-page">
        <FilterByTech onFilter={filterProjectsInfo} />
        <div className="projects-page__inner">
          <div className="projects-wrapper">
            {projectsInfo.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
        <style jsx global>{`
          body {
            background: whitesmoke;
          }
          .projects-page {
            width: 100%;
            height: 100%;
          }

          .projects-page__inner {
            display: flex;
            justify-content: space-between;
          }
          .projects-wrapper {
            width: 80%;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            margin: auto;
            padding-bottom: 30px;
            margin-top: 20px;
          }
          navbar #navbar-slider label::after {
            background: lightgray !important;
          }
          navbar #navbar-slider::before {
            background: lightgray !important;
          }
          @media (max-width: 400px) {
            .projects-wrapper {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              margin-left: 10px !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Projects;

const allProjectsInfo = [
  {
    title: "Portfolio",
    demoLink: "https://hajarnasr.netlify.app/",
    id: "5",
    image: "https://i.ibb.co/SNt4WJc/port.jpg",
    alt: "This portfolio's image",
    github: "https://github.com/hajarNasr/myPortfolio",
    tech: ["HTML5 & CSS3", "JavaScript", "React", "Nextjs"],
  },
  {
    title: "Smart Shopping List",
    demoLink: "https://tcl-15-smart-shopping-list.netlify.app/",
    id: "5",
    image: "https://i.ibb.co/8xyPkj5/smartcart.jpg",
    alt: "This portfolio's image",
    github: "https://github.com/the-collab-lab/tcl-15-smart-shopping-list/",
    tech: ["HTML5 & CSS3", "JavaScript", "React", "Firebase"],
  },
  {
    title: "Artistic Zone",
    demoLink: "https://artisticzone.herokuapp.com/",
    desc: "A small e-commerce app for art and photography.",
    id: "4",
    image: "https://i.ibb.co/dkp08f2/artisticzone.jpg",
    alt: "Aritistic Zone project's image",
    github: "https://github.com/hajarNasr/ArtisticZone",
    tech: [
      "HTML5 & CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Expressjs",
      "MongoDB",
    ],
  },
  {
    title: "Old Portfolio",
    demoLink: "https://onemile.netlify.app/",
    id: "3",
    image: "https://i.ibb.co/52KgSjp/xx.jpg",
    alt: "My old portfolio's image",
    github: "https://github.com/hajarNasr/portfolio",
    tech: ["HTML5 & CSS3", "MDL", "JavaScript", "React"],
  },
  {
    title: "iRecommend-App",
    demoLink: "https://irecommend-app.herokuapp.com/",
    id: "2",
    image: "https://i.ibb.co/C8kkR8K/irecommend.jpg",
    alt: "I Recommend app project's image",
    github: "https://github.com/hajarNasr/irecommend-app",
    tech: [
      "HTML5 & CSS3",
      "MDL",
      "JavaScript",
      "React",
      "Redux",
      "Pyhton",
      "Django",
    ],
  },
  {
    title: "Voila",
    demoLink: "https://voilaa.herokuapp.com/",
    id: "1",
    image: "https://i.ibb.co/rcgfZMk/voila.jpg",
    alt: "Voila project's image",
    github: "https://github.com/hajarNasr/Voila",
    tech: ["HTML5 & CSS3", "MDL", "Bootstrap", "Pyhton", "Django"],
  },
];
