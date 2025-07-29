import "./Hero.css";
import dark_arrow from "@assets/dark_arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Wealth isn’t built overnight. It’s built with us</h1>
        <p>
          We plant today, so your generations can grow tomorrow. <br />Wealth isn’t
          built in a day — but with trust, vision, and time, it compounds
        </p>
        <button className="btn">ExplorMore <img src= {dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
