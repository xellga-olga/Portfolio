import styles from "./HeroStyles.module.css";
import hero from "../../assets/hero.webp";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// import githubDark from "../../assets/githubdark.svg";
// import githubLight from "../../assets/githublight.svg";
// import instagramDark from "../../assets/instagramdark.svg";
// import instagramLight from "../../assets/instagramlight.svg";

import inst from "../../assets/inst.svg"
import github from "../../assets/github.svg"
import facebook from "../../assets/facebook.svg"

import birthdayIcon from "../../assets/birthdayIcon.svg"
import phoneIcon from "../../assets/phoneIcon.svg"
import emailIcon from "../../assets/emailIcon.svg"

import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  // const githubIcon = theme === "light" ? githubLight : githubDark;
  // const instagramIcon = theme === "light" ? instagramDark : instagramLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={hero} alt="Profile picture" className={styles.hero} />
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
              src={inst}
              alt="Instagram icon"
              className={styles.icon}
            />
          </a>
          <a href="https://github.com/xellga-olga">
            <img src={github} alt="GitHub icon" className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/O1ina">
            <img src={facebook} alt="Facebook icon" className={styles.icon} />
          </a>
        </span>

        <div className={styles.personalInfo}>
          <div className={styles.infoItem}>
            <img src={birthdayIcon} alt="Birthday icon" className={styles.icon} />
            <p>Born:07.04.1997</p>
          </div>
          <div className={styles.infoItem}>
            <img src={phoneIcon} alt="Phone icon" className={styles.icon} />
            <p>
              <a href="tel:+380668308825">+380668308825</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <img src={emailIcon} alt="Email icon" className={styles.icon} />
            <p>
              <a href="mailto:olha@example.com">noskinaolga1@gmail.com</a>
            </p>
          </div>
        </div>

        <p className={styles.description}>
          Passionate frontend developer, skilled in React and creating
          intuitive, responsive interfaces.
          <br /> 
          Let’s build something great
          together!
        </p>
      </div>
    </section>
  );
};

export default Hero;
