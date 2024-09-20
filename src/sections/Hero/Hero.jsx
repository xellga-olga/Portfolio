import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/heroImg.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubDark from "../../assets/githubdark.svg";
import githubLight from "../../assets/githublight.svg";
import instagramDark from "../../assets/instagramdark.svg";
import instagramLight from "../../assets/instagramlight.svg";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const instagramIcon = theme === "light" ? instagramDark : instagramLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="Profile picture" className={styles.hero} />
        <img
          onClick={toggleTheme}
          src={themeIcon}
          alt="Color mode icon"
          className={styles.colorMode}
          width={30}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Olha
          <br />
          Plakhotnikova
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.instagram.com/olya__pla/">
            <img
              src={instagramIcon}
              alt="Instagram icon"
              className={styles.icon}
            />
          </a>
          <a href="https://github.com/xellga-olga">
            <img src={githubIcon} alt="GitHub icon" className={styles.icon} />
          </a>
        </span>
        <p className={styles.description}>
          Passionate frontend developer, skilled in React and creating
          intuitive, responsive interfaces. Let’s build something great
          together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
