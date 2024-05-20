import movieProject from "../../assets/Movieflix.png";
import pizzaProject from "../../assets/Butapizza.png";
import { LiaLinkSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const containerOneVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerTwoVariant = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="project"
      className="w-full flex flex-col justify-center items-center px-12 py-12 gap-12 lg:gap-24"
      ref={ref}
    >
      <h2 className="text-4xl font-bold uppercase dark:text-light-white md:text-5xl">
        My Projects
      </h2>
      <div className="flex flex-col items-center gap-12 justify-center lg:flex-row">
        <motion.div
          className="max-w-[550px]"
          variants={containerOneVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h4 className="text-4xl font-semibold mb-6 dark:text-light-white">
            Movieflix
          </h4>
          <p className="my-6 text-gray-500 dark:text-light-gray">
            Movieflix is a movie website that allows users to explore and
            discover movies and TV shows. Leveraging the TMDB API, I was able to
            implement features like movie search, detailed information pages,
            and dynamic navigation using React Router. TypeScript provided
            robust type-checking to ensure the code's reliability, while
            Bootstrap helped in creating a responsive and visually appealing
            interface.
          </p>
          <div className="flex items-center gap-4">
            <button className="transition duration-150 ease-in hover:scale-110 dark:text-light-white">
              <a
                href="https://movieflix-swart.vercel.app/"
                target="_blank"
                className="text-3xl"
              >
                <LiaLinkSolid />
              </a>
            </button>
            <button className="transition duration-150 ease-in hover:scale-110 dark:text-light-white">
              <a
                href="https://github.com/Htet-Wy/movieflix"
                target="_blank"
                className="text-3xl"
              >
                <FaGithub />
              </a>
            </button>
          </div>
        </motion.div>
        <div className="max-w-[650px] overflow-hidden">
          <img
            src={movieProject}
            alt="movieflix"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20 justify-center lg:flex-row">
        <div className="max-w-[650px] overflow-hidden">
          <img
            src={pizzaProject}
            alt="buta pizza"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="max-w-[550px] order-first lg:order-last"
          variants={containerTwoVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h4 className="text-4xl font-semibold dark:text-light-white">
            ButaPizza
          </h4>
          <p className="my-6 text-gray-500 dark:text-light-gray">
            Butapizza is a pizza website I developed using Redux Toolkit, React
            Redux, React, Tailwind CSS and Framer Motion. Butapizza is an
            interactive platform for pizza enthusiasts, where users can place
            orders, and explore various menu options. By integrating Redux
            Toolkit and React Redux, I ensured efficient state management and a
            seamless user experience. Tailwind CSS enabled me to design a
            responsive and aesthetically pleasing interface quickly.
          </p>
          <div className="flex items-center gap-4">
            <button className="transition duration-150 ease-in hover:scale-110 dark:text-light-white">
              <a
                href="https://github.com/Htet-Wy/butapizza"
                target="_blank"
                className="text-3xl"
              >
                <FaGithub />
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
