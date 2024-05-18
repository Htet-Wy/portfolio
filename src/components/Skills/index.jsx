import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaFreeCodeCamp,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { amount: 0.8, once: true });

  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const certificateVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
      },
    },
  };

  return (
    <section
      id="skill"
      className="w-full bg-cloud-white dark:bg-deep-black dark:text-gray-300 flex flex-col justify-center items-start px-6 py-12 md:px-12"
      ref={skillsRef}
    >
      <h2 className="text-5xl font-bold mb-24 self-center uppercase dark:text-light-white">
        Skills
      </h2>
      <div className="flex flex-col items-start justify-center gap-8">
        <h3 className="text-xl text-center lg:text-left dark:text-light-white">
          Languages & Frameworks
        </h3>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaHtml5 className="text-xl" />
            html
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaCss3 className="text-xl" />
            css
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <IoLogoJavascript className="text-xl" />
            javascript
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaReact className="text-xl" />
            react
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <RiNextjsFill className="text-xl" />
            nextjs
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <SiTypescript className="text-xl" />
            typescript
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaBootstrap className="text-xl" />
            bootstrap
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <RiTailwindCssFill className="text-xl" />
            tailwind
          </motion.div>
        </motion.div>
        <h3 className="text-xl text-center lg:text-left dark:text-light-white">
          Development Toolkit
        </h3>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaGitAlt className="text-xl" />
            git
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaGithub className="text-xl" />
            github
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={skillVariant}
          >
            <FaNpm className="text-xl" />
            npm
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase  dark:border-light-white"
            variants={skillVariant}
          >
            <SiVite className="text-xl" />
            vite
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase  dark:border-light-white"
            variants={skillVariant}
          >
            <VscVscode className="text-xl" />
            vscode
          </motion.div>
        </motion.div>
        <h3 className="text-xl text-center lg:text-left dark:text-light-white">
          Skills & Certifications
        </h3>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={containerVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase  dark:border-light-white"
            variants={certificateVariant}
          >
            <FaFreeCodeCamp className="text-xl" />
            <a
              href="https://www.freecodecamp.org/certification/fccb065e16e-b6c9-4a9d-9785-53eff7a32309/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              javascript algorithms and data structures
            </a>
          </motion.div>
          <motion.div
            className="border border-black flex items-center gap-2 px-4 py-2 rounded-xl uppercase dark:border-light-white"
            variants={certificateVariant}
          >
            <FaFreeCodeCamp className="text-xl" />
            <a
              href="https://www.freecodecamp.org/certification/fccb065e16e-b6c9-4a9d-9785-53eff7a32309/front-end-development-libraries"
              target="_blank"
            >
              front end development libraries
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
