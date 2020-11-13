import { useState } from "react";
import Head from "next/head";
import Project from "../components/Project";
import FilterByTech from "../components/FilterByTech";
const Projects = () => {
  let [projectsInfo, setProjectInfo] = useState(allProjectsInfo);

  const filterProjectsInfo = (name) => {
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
      <main className="projects-page">
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
          .projects-page__inner {
            display: flex;
            justify-content: space-between;
          }
          .projects-wrapper {
            width: 90%;
            display: grid;
            grid-gap: 25px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            margin: auto;
            padding-bottom: 30px;
            min-height: 80vh;
          }
          navbar #navbar-slider label::after {
            background: lightgray;
          }
          navbar #navbar-slider::before {
            background: lightgray;
          }
        `}</style>
      </main>
    </>
  );
};

export default Projects;

const allProjectsInfo = [
  {
    title: "Portfolio",
    demoLink: "https://artisticzone.herokuapp.com/",
    id: "5",
    image: "port.JPG",
    github: "https://github.com/hajarNasr/ArtisticZone",
    tech: ["HTML5 & CSS3", "JavaScript", "React", "Nextjs"],
  },
  {
    title: "Artistic Zone",
    demoLink: "https://artisticzone.herokuapp.com/",
    desc: "A small e-commerce app for art and photography.",
    id: "4",
    image: "artisticzone.JPG",
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
    demoLink: "https://irecommend-app.herokuapp.com/",
    id: "3",
    image: "xx.JPG",
    github: "https://github.com/hajarNasr/irecommend-app",
    tech: ["HTML5 & CSS3", "MDL", "JavaScript", "React"],
  },
  {
    title: "iRecommend-App",
    demoLink: "https://irecommend-app.herokuapp.com/",
    id: "2",
    bulitWith: "",
    image: "irecommend.JPG",
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
    image: "voila.JPG",
    github: "https://github.com/hajarNasr/Voila",
    tech: ["HTML5 & CSS3", "MDL", "Bootstrap", "Pyhton", "Django"],
  },
];
