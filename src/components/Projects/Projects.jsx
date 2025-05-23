import classes from "./Projects.scss";
import SectionTitle from "../UI/SectionTitle";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import newNormal from "../../assets/projects-images/newNormal.png";
import sanad from "../../assets/projects-images/sanad.png";
import edaat from "../../assets/projects-images/edaat.png";
import hamad from "../../assets/projects-images/hamad.png";
import yes from "../../assets/projects-images/yesWeCan.png";
import wealth from "../../assets/projects-images/wealth.png";
import edu from "../../assets/projects-images/edu.png";
import hero from '../../assets/images/hero.png'
import durra from '../../assets/Screenshot 2025-05-23 173119.png'


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });

  const isSmallScreen = window.innerWidth < 768;

  console.log(isSmallScreen);

  const works = [
    {
      title: "Wealth Makers",
      description:
        "The project is a platform that offers courses, bots, and recommendations in the field of trading. It has a network marketing system called the tree system, a marketing method that relies on users.",
      projectLink:
        "https://www.wealthmakers-fx.com/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: wealth,
      tags: ["React", "Recent"],
    },
    {
      title: "Durra",
      description:
        "The project is a platform that offers jewels ",
      projectLink:
        "https://durra.vercel.app/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: durra,
      tags: ["React", "Recent"],
    },
    {
      title: "Edaat",
      description:
        "This project is for a magazine  and it is designed to broadcast the latest issues.",
      projectLink:
        "https://lightsjournal.website/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: edaat,
      tags: ["React", "Recent"],
    },
    {
      title: "Hamad Alazzani",
      description:
        "This website facilitates travel procedures and document submission for any student who wants to pursue a PhD, Master's degree, or any other study in Europe.",
      projectLink:
        "https://www.hamad-edu.com/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: hamad,
      tags: ["React", "Recent"],
    },
    {
      title: "Welo",
      description:
        "This project relies on an API provided by an external company that offers specific courses with a monthly subscription. Those who subscribe to this API can sell the courses it provides. We display the data returned from the company's API, implemented a user database, and created our own payment system to handle orders. ",
      projectLink:
        "https://edu.welo.org.uk/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: edu,
      tags: ["React", "Recent"],
    },
    {
      title: "Yes We Can",
      description:
        "This is a system for an organization that works on modifying human behaviors. Through this system, you can conduct tests on the treated individual by having their close associates answer some questions to verify whether the person's behavior has truly been modified.",
      projectLink:
        "https://benaa-test.com/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: yes,
      tags: ["React", "Recent"],
    },
    {
      title: "Sand",
      description:
        "This project is a platform for selling legal contracts in Saudi Arabia.",
      projectLink:
        "https://sanad-legal.com/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: sanad,
      tags: ["React", "Recent"],
    },
    {
      title: "Fit Club",
      description:
        "ready to level up with us ",
      projectLink:
        "https://mostafa-m-gomaa.github.io/Fit-Club/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: hero,
      tags: ["React", "Recent"],
    },
  ];

  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") setFilterWork(works);
      else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <Fragment>
      <SectionTitle>projects</SectionTitle>
      <div className="projects">
        <div className="app__work-filter">
          {["Recent", "React"].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex ${
                    activeFilter === item ? "item-active" : ""
                  }`}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.img} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {/* <a
                    href={isSmallScreen ? work.projectLink : work.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a> */}
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4>{work.title}</h4>
                <p style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Fragment>
  );
};
export default Projects;
