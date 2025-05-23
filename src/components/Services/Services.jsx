import classes from "./Services.module.scss";
import SectionTitle from "../UI/SectionTitle";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import Card from "../UI/Card";
import { motion, useSpring } from "framer-motion";

let viewportWidth = window.innerWidth;

const Services = () => {
  const transition = {
    duration: 1,
    type: useSpring,
  };

  return (
    <section className={classes["services"]}>
      <SectionTitle>services</SectionTitle>
      <div className={classes["services__container"]}>
        <div className={classes["services__text-box"]}>
          <p>
            I know that good development means good business So I keen to make
            consistent, efficient and powerful front end developer create websites with fully
            functional and user friendly user interface that will empower your
            business
          </p>
          <a
            href="https://drive.google.com/file/d/1PX89zq__FDBnJnTTnsOhA2D-SPhzSb01/view?usp=sharing"
            target="_blank"
            className={`${classes["services__button"]}`}
           
          >
            CV
          </a>
        </div>
        <div className={classes["services__cards-container"]}>
          <motion.div
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform:
                viewportWidth > 776 ? "translateX(-90%)" : "translateX(0)",
              opacity: viewportWidth > 776 ? 0 : 1,
            }}
            style={{
              top: "17.2rem",
              left:
                viewportWidth < 1050 && viewportWidth > 991 ? "-9rem" : "-7rem",
              transform:
                viewportWidth > 776 ? "translateX(-90%)" : "translateX(0)",
              opacity: viewportWidth > 776 ? 0 : 1,
            }}
            className={classes["back-end"]}
          >
            <Card
              emoji={<FcAcceptDatabase fontSize="100px" />}
              heading={"Back-end"}
              detail={
                "I'am a fully compatable eith the back end technologies and api "
              }
            />
          </motion.div>
          {/*  */}
          <motion.div
            whileInView={{ transform: "translateX(0%)", opacity: 1 }}
            transition={transition}
            initial={{
              transform:
                viewportWidth > 776 ? "translateX(100%)" : "translateX(0)",
              opacity: viewportWidth > 776 ? 0 : 1,
            }}
            className={classes["front-end"]}
            style={{
              top: "-16%",
              left: "19.5vw",
              transform:
                viewportWidth > 776 ? "translateX(100%)" : "translateX(0)",
              opacity: viewportWidth > 776 ? 0 : 1,
            }}
          >
            <Card
              emoji={<FcMultipleDevices fontSize="100px" />}
              heading={"front-end"}
              detail={
                "I'am a frontend developer with a passion for building beautiful and functional web applications"
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

/*

  .front-end {
    top: -21%;
    left: 19.5vw; // 250px
  }
  .back-end {
    top: 17.2rem;
    left: -7rem;
  }

*/
