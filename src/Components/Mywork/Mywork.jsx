import "./Mywork.css";
import highlighter from "../../assets/highlighter.svg";
import mywork_data from "../../assets/mywork_data";
const Mywork = () => {
  return (
    <div id="MyWork" className="mywork">
      <div className="title">
        <h1>My work experience</h1>
        <img src={highlighter} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((Work, index) => {
          return (
            <a href={Work.w_link} target="blank">
              <img key={index} src={Work.w_img} alt="" className="work_img" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Mywork;
