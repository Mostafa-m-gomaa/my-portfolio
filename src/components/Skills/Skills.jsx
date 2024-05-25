import React, { Fragment } from "react";

import ReactTooltip from "react-tooltip";

import SectionTitle from "../UI/SectionTitle";

import { TbCertificate } from "react-icons/tb";

import react from "../../assets/skills/react.png";
import redux from "../../assets/skills/redux.png";
import sass from "../../assets/skills/sass.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.png";
import node from "../../assets/skills/node.png";
import nextJs from "../../assets/skills/nextjs.png";
import git from "../../assets/skills/git.png";
import docker from "../../assets/skills/docker.png";
import TypeScript from "../../assets/skills/typescript.png";
import tailwind from "../../assets/skills/tailwind.png";
import aws from "../../assets/skills/aws.png";

import { motion, useSpring } from "framer-motion";

import "./Skills.scss";

let viewportWidth = window.innerWidth;

const transition = {
  duration: 0.3,
  type: useSpring,
};

const Skills = () => {
  const certificates = [
    {
      skill: "Bachelor of Computer Science Helwan University",
      src: "",
      id: "1-a",
      certificate: [
        {
          id: "1",
          name: "Programming foundation",
          company: "Helwan University",
          desc: "",
        },
      ],
    },

  ];

  return (
    <motion.section
      whileInView={{ transform: "translateY(0%)", opacity: [0, 1] }}
      transition={transition}
      className="skills"
    >
      <SectionTitle>skills & certificates</SectionTitle>

      <div className="skills__container">
        <div className="skills__list">
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={html} alt="html" />
            </div>
            <p className="skill-name">HTML</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={css} alt="css" />
            </div>
            <p className="skill-name">CSS</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={tailwind} alt="css" />
            </div>
            <p className="skill-name">Tailwind</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={sass} alt="sass" />
            </div>
            <p className="skill-name">Sass</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={javascript} alt="javascript" />
            </div>
            <p className="skill-name">Javascript</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={react} alt="react" />
            </div>
            <p className="skill-name">React</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={redux} alt="redux" />
            </div>
            <p className="skill-name">redux</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={nextJs} alt="nextJs" />
            </div>
            <p className="skill-name">NextJs</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={node} alt="nodeJs" />
            </div>
            <p className="skill-name">NodeJs</p>
          </div>
     
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={docker} alt="aws" />
            </div>
            <p className="skill-name">Docker</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={TypeScript} alt="aws" />
            </div>
            <p className="skill-name">TypeScript</p>
          </div>
          <div className="skills__item app__flex">
            <div className="app__flex">
              <img src={git} alt="aws" />
            </div>
            <p className="skill-name">git</p>
          </div>
        </div>

        <div className="skills-certificates">
          {certificates.map((certificate) => {
            return (
              <div key={certificate.id} className="skills-cer">
                <a
                  className="skills-cer-icon"
                  target="_blank"
                  rel="noreferrer"
                  title="see the certificate"
                  href={`${certificate.src}`}
                >
                  <TbCertificate fontSize={40} />{" "}
                </a>
                <div>
                  {certificate.certificate.map((item) => {
                    return (
                      <Fragment key={item.id}>
                        <div
                          key={item.id}
                          className="skills-cer-text"
                          data-tip
                          data-for={item.name}
                        >
                          <h4>{item.name}</h4>
                          <p>{item.company}</p>
                        </div>
                        <ReactTooltip
                          id={item.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {item.desc}
                        </ReactTooltip>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
