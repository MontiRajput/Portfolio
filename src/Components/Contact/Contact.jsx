import "./Contact.css";
import highlighter from "../../assets/highlighter.svg";
import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/phone_icon.svg";
import location from "../../assets/location.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "679df7a8-60c7-4ded-bedf-462583642110");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="Contact" className="contact">
      <div className="title">
        <h1>Get in touch</h1>
        <img src={highlighter} alt="" />
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <img src={mail_icon} alt="" />
              <p>mrrajput7082@gmail.com</p>
            </div>
            <div className="contact_detail">
              <img src={phone_icon} alt="" />
              <p>(+91) 8607958796</p>
            </div>
            <div className="contact_detail">
              <img src={location} alt="" />
              <p>Haryana, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact_right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name"></input>
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
          ></input>
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
