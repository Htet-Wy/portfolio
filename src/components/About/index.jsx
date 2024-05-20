import { motion, useInView } from "framer-motion";
import aboutImg from "../../assets/about.png";
import { useRef } from "react";
import resume from "../../assets/Htet-Wai-Yan-Resume.pdf";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { amount: 0.5, once: true });

  const aboutImgVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.8,
      },
    },
  };

  const aboutTextVariant = {
    hidden: {
      x: "200vw",
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
      id="about"
      className="w-full flex flex-col bg-cloud-white dark:bg-deep-black justify-center items-center gap-8 px-6 py-12 text-gray-500 dark:text-gray-400 lg:flex-row"
      ref={aboutRef}
    >
      <motion.div
        className="max-w-[550px] flex items-center"
        variants={aboutImgVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          src={aboutImg}
          alt="about illustration"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="max-w-[500px]"
        variants={aboutTextVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="text-xl">Who am I?</p>
        <h2 className="text-4xl font-bold uppercase my-4 text-midnight-slate dark:text-light-white">
          About me
        </h2>
        <p>
          I'm a 23 years old, a frontend developer who transforms ideas into
          interactive, user-friendly websites.Ever since I wrote my first line
          of code, I've been hooked on the endless possibilities of the web.
        </p>
        <p className="my-6">
          I specilize in Html,Css and JavaScript and I love working with React
          and Nextjs to create dynamic web applications. My approach is all
          about combining clean code with compelling visuals to create digital
          experiences that not only look good but also perform flawlessly.
        </p>
        <p>
          Outside of coding,I'm a video gamer, tech enthusiast and coffee lover.
          I’m always up for a new challenge and love pushing the boundaries of
          what’s possible on the web.
        </p>
        <p className="my-6">
          Check out my portfolio to see what I’ve been working on, and if you
          like what you see, let’s connect and make something awesome together!
        </p>
        <button className="bg-midnight-slate px-5 py-2 text-light-white transition-all duration-150 ease-in hover:scale-95">
          <a href={resume} download>
            Check My Resume
          </a>
        </button>
      </motion.div>
    </section>
  );
};

export default About;
