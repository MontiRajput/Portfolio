import profile_img from "../../assets/profile_img.png";
import "./Hero.css";
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
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};
export default Hero;
