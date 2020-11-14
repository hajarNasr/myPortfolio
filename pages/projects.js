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
            background: lightgray !important;
          }
          navbar #navbar-slider::before {
            background: lightgray !important;
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
    image: "https://i.ibb.co/SNt4WJc/port.jpg",
    alt: "This portfolio's image",
    github: "https://github.com/hajarNasr/ArtisticZone",
    tech: ["HTML5 & CSS3", "JavaScript", "React", "Nextjs"],
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
    demoLink: "https://irecommend-app.herokuapp.com/",
    id: "3",
    image: "https://i.ibb.co/52KgSjp/xx.jpg",
    alt: "My old portfolio's image",
    github: "https://github.com/hajarNasr/irecommend-app",
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
