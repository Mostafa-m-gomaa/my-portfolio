import classes from "./Projects.scss";
import SectionTitle from "../UI/SectionTitle";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import cvWebsite from "../../assets/projects-images/CV-website.png";
import omnifood from "../../assets/projects-images/Omnifood.png";
import forkify from "../../assets/projects-images/forkify.png";
import pigGame from "../../assets/projects-images/Pig-Game.png";
import bankist from "../../assets/projects-images/Bankist.png";
import bankistWebsite from "../../assets/projects-images/bankist-website.png";
import mapty from "../../assets/projects-images/mapty.png";
import kasper from "../../assets/projects-images/Kasper.png";
import passwords from "../../assets/projects-images/passwords.png";
import leon from "../../assets/projects-images/Leon.png";
import chat from "../../assets/projects-images/chat.png";
import weather from "../../assets/projects-images/weather-app.png";
import sst from "../../assets/projects-images/sst.png";
import productivity from "../../assets/projects-images/productivity-zone.png";
import hero from '../../assets/images/hero.png'
import Xo from '../../assets/images/Untitled.png'
import weatheri from '../../assets/images/weather.png'
import todo from '../../assets/images/todo.png'
import port from '../../assets/images/port.png'
import crepto from '../../assets/images/crepto.png'
import speed from '../../assets/images/speed.png'
import oodo from '../../assets/images/toodo.png'
import htm from '../../assets/images/htm.png'
import cvs from '../../assets/images/cvs.png'
import creative from '../../assets/images/creative.png'

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
      title: "Portfolio for my work",
      description:
        " A website that represent my  latest work and how to contact me",
      projectLink: "https://mostafa-m-gomaa.github.io/my-last-porto/",
      codeLink: "https://github.com/Mostafa-m-gomaa/my-last-porto",
      img: port,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "omnifood",
      description: "A restaurant website land page has an awesome design",
      projectLink: "https://abdelrhman-ahmed-kamal.github.io/omnifood/",
      codeLink: "https://github.com/Mostafa-m-gomaa",
      img: omnifood,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "Fit Club",
      description:
        "ready to level up with us ",
      projectLink:
        "https://mostafa-m-gomaa.github.io/Fit-Club/",
      codeLink: "https://github.com/Mostafa-m-gomaa/Fit-Club",
      img: hero,
      tags: ["React", "ALL"],
    },
    {
      title: "X-O Game",
      description: "tic tac toe game based on react js , sass",
      projectLink: "https://mostafa-m-gomaa.github.io/XO-Game/",
      codeLink: "https://github.com/Mostafa-m-gomaa/XO-Game",
      img: Xo,
      tags: ["React", "ALL"],
    },
    {
      title: "Weather app",
      description: "A simple app that allows you to the weather at any country in the world",
      projectLink:
        "https://mostafa-m-gomaa.github.io/weather-app/",
      codeLink:
        "https://github.com/Mostafa-m-gomaa/weather-app",
      img: weatheri,
      tags: ["React", "ALL"],
    },
    {
      title: "To do App",
      description: "A simple app that allows note any thing and delete it at any time",
      projectLink:
        "https://mostafa-m-gomaa.github.io/student-sign-app/",
      codeLink:
        "https://github.com/Mostafa-m-gomaa/student-sign-app",
      img: todo,
      tags: ["React", "ALL"],
    },
    {
      title: "Crepto",
      description:
        "A small project that show you that u can change the color of all the website by one click",
      projectLink: "https://mostafa-m-gomaa.github.io/vanilla-javascirpt/",
      codeLink: "https://github.com/Mostafa-m-gomaa/vanilla-javascirpt",
      img: crepto,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "speed test game",
      description: "A simple game that test your speed at wiriting",
      projectLink: "https://mostafa-m-gomaa.github.io/speed-test-game/",
      codeLink: "https://github.com/Mostafa-m-gomaa/speed-test-game",
      img: speed,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "Weather App",
      description:
        "A weather app allows you to get the weather in your current location",
      projectLink: "https://abdelrahman-node-weather-app-2.herokuapp.com/",
      codeLink:
        "https://github.com/abdelrhman-ahmed-kamal/Kalbonyan-Elmarsos/tree/main/02-Udemy/-05-Nodejs/Projects/Weather-App",
      img: weather,
      tags: ["NodeJs", "ALL"],
    },
    {
      title: "Chat app",
      description:
        "A Chat app allows you to chat with your friends in chat rooms",
      projectLink: "https://abdelrahman-chat-app.herokuapp.com",
      codeLink:
        "https://github.com/Mostafa-m-gomaa",
      img: chat,
      tags: ["NodeJs", "ALL"],
    },
    {
      title: "To-DO APP",
      description: "A simple web application that make schedule your asks",
      projectLink: "https://mostafa-m-gomaa.github.io/To-Do-App/",
      codeLink: "https://github.com/Mostafa-m-gomaa/To-Do-App",
      img: oodo,
      tags: ["JavaScript", "ALL"],
    },

    {
      title: "Creatives Agency",
      description: "A simple website for marketing agency",
      projectLink: "https://mostafa-m-gomaa.github.io/SpecialDesign/",
      codeLink: "https://github.com/Mostafa-m-gomaa/SpecialDesign",
      img: creative,
      tags: ["JavaScript", "ALL"],
    },
    {
      title: "Kasper",
      description: "An HTMl & CSS land page template",
      projectLink: "https://abdelrhman-ahmed-kamal.github.io/kasper/",
      codeLink: "https://github.com/Mostafa-m-gomaa",
      img: kasper,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "html&css design",
      description: "An HTMl & CSS design that represent my skills at it",
      projectLink: "https://mostafa-m-gomaa.github.io/new-design-/",
      codeLink: "https://github.com/Mostafa-m-gomaa/new-design-",
      img: htm,
      tags: ["HTML & CSS", "ALL"],
    },
    {
      title: "CV website",
      description: "A simple website cv that represent my skills at html and css",
      projectLink: "https://mostafa-m-gomaa.github.io/mostafagomaa/",
      codeLink: "https://github.com/Mostafa-m-gomaa/mostafagomaa",
      img: cvs,
      tags: ["HTML & CSS", "ALL"],
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
          {["All", "React", "JavaScript", "HTML & CSS"].map(
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
                  <a
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
                  </a>
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
