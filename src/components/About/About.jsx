import classes from "./About.module.scss";
import SectionTitle from "../UI/SectionTitle";

import pic from "../../assets/images/me.jpg";

const About = () => {
  return (
    <section className={classes["about"]}>
      <SectionTitle>about me</SectionTitle>
      <div className={classes["about__container"]}>
        <div className={classes["about__text-box"]}>
          <div>
            <p className={classes["about__paragraph"]}>
              Hello! My name is Mostafa Mohammed. I am a self-taught And a college learner 
              programming who is passionate about programming in general and
              especially web development.
            </p>
       
          </div>
        </div>
        <div className={classes["about__img-box"]}>
          <div className={classes["img-container"]}>
            <img
              className="img"
              src={pic}
              alt="Mostafa Gomaa"
              title="Mostafa Gomaa"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
