import EShop from "../assets/e-shop.png";
import Weather from "../assets/weather.png";
import News from "../assets/news.png";
import ECommerce from "../assets/e-commerce.png";

const ProjectCard = () => {
  return (
    <>
      <a href="https://e-shop-kappa.vercel.app/" target="_blank">
        <img className="hover" src={EShop} alt="project image" />
        <h3>E-Shop</h3>
        <p>E-commerce website using React, Redux Toolkit, and Tailwind CSS.</p>
      </a>
      <a href="https://weather-six-orcin.vercel.app/" target="_blank">
        <img className="hover" src={Weather} alt="project image" />
        <h3>Weather</h3>
        <p>React JS Weather App using OpenWeatherMap API</p>
      </a>
      <a href="https://news-react-blush.vercel.app/" target="_blank">
        <img className="hover" src={News} alt="project image" />
        <h3>News</h3>
        <p>E-commerce website using React, Redux Toolkit, and Tailwind CSS.</p>
      </a>
      <a href="https://e-commerce-five-cyan-40.vercel.app/" target="_blank">
        <img className="hover" src={ECommerce} alt="project image" />
        <h3>E-Commerce</h3>
        <p >
          E-commerce website using React, React Router, Auth0,React Icons.
        </p>
      </a>
      
    </>
  );
};

export default ProjectCard;
