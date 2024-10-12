import ProjectCard from "../../common/ProjectCard";
import styles from "./Projects.module.css";

import EShop from '../../assets/e-shop.png';
import Weather from '../../assets/weather.png';
import News from '../../assets/news.png';
import ECommerce from '../../assets/e-commerce.png';

const projects = [
  {
    title: "E-Shop",
    description: "E-commerce website using React, Redux Toolkit, and Tailwind CSS.",
    image: EShop,
    link: "https://e-shop-kappa.vercel.app/",
  },
  {
    title: "Weather",
    description: "React JS Weather App using OpenWeatherMap API",
    image: Weather,
    link: "https://weather-six-orcin.vercel.app/",
  },
  {
    title: "News",
    description: "News website using React, Redux Toolkit, and Tailwind CSS.",
    image: News,
    link: "https://news-react-blush.vercel.app/",
  },
  {
    title: "E-Commerce",
    description: "Web application using React JS and Tailwind CSS.",
    image: ECommerce,
    link: "https://e-commerce-inly.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;