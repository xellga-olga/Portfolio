import ProjectCard from "../../common/ProjectCard";
import styles from "./Projects.module.css";


const Projects = () => {
  return <section className={styles.container} id="projects">
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectContainer}>
     <ProjectCard />
    </div>
  </section>;
};

export default Projects;
