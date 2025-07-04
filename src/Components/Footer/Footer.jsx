import "./Footer.css";
import person from "../../assets/person.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="discription">
        <div className="left">
          <div className="logo-footer">MoNTI</div>
          <div className="info">
            I am a frontend developer from, India with 3+ full stack deployed
            projects & also having a Internship experience.
          </div>
        </div>
        <div className="right">
          <div className="email">
            <img src={person} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>

          <button className="sub">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="rights">
        <div className="copyright">
          © 2025 Monti Rajput. All rights reserved.
        </div>
        <div className="terms">
          <div className="term">Term of Services</div>
          <div className="privacy">Privacy Policy</div>
          <div className="connect">Connect with me</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
