import { delay, motion } from "framer-motion";
import heroImg from "../../assets/hero.png";
import AnimationText from "../../ui/Animation";

const Home = () => {
  const headVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const heroImgVariant = {
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
  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center text-center gap-8 px-6 py-4 lg:text-left lg:flex-row"
    >
      <div className="max-w-[600px]">
        <motion.h1
          className="text-xl font-raleway text-gray-500 md:text-2xl dark:text-light-gray"
          variants={headVariant}
          initial="hidden"
          animate="visible"
        >
          Hello, I'm Htet Wai Yan
        </motion.h1>
        <AnimationText
          text="I'm a front-end developer"
          textStyles="text-4xl uppercase my-6 font-roboto md:text-7xl dark:text-light-white"
        />

        <motion.button className="bg-midnight-slate text-light-white px-10 py-3 transition-all duration-150 ease-in hover:scale-95">
          <a href="#project">My Works</a>
        </motion.button>
      </div>
      <motion.div
        className="flex items-center max-w-[550px]"
        variants={heroImgVariant}
        initial="hidden"
        animate="visible"
      >
        <img
          src={heroImg}
          alt="hero illustrator"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
};

export default Home;
