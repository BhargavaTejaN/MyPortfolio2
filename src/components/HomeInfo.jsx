import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-containe" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, This is <span className="font-semibold">Bhargava Teja</span>
      <br />A Full Stack Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked With a company and many individuals picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led Multiple projects to success over the year. Curious about the impact?"
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking For A dev? I'm Just a Few keystrokes away"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
