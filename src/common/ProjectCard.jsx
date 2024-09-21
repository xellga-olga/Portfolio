import styles from "../sections/Projects/Projects.module.css"

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <img src={project.image} alt={`${project.title} image`} className={`${styles.image} hover`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </a>
  );
};

export default ProjectCard;