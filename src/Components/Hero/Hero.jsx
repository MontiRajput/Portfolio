import profile_img from "../../assets/profile_img.png";
import "./Hero.css";
import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Monti Rajput,</span> Frontend Artist × Backend Builder ×
        Fullstack Explorer
      </h1>
      <p>
        Hi, I'm a passionate Full-Stack Developer, Solved 1000+ coding Queries.
      </p>
      <div className="hero-action">
        <Link to="Contact" smooth={true} offset={-100} duration={500}>
          <div className="hero-connect">Connect with me</div>
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          className="hero-resume"
          rel="noopener noreferrer"
        >
          Get Resume
        </a>
      </div>
    </div>
  );
};
export default Hero;
