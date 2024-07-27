import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  const contactVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="w-full bg-deep-black text-light-white p-12 dark:bg-cloud-white dark:text-midnight-slate"
      ref={contactRef}
    >
      <h2 className="mb-10 text-5xl uppercase font-bold">Contact Me</h2>
      <motion.div
        className="flex flex-col items-start gap-8 border-b border-b-light-white pb-6 dark:border-b-midnight-slate"
        variants={contactVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex items-center gap-4">
          <FaPhoneAlt />
          <p>+66985281807</p>
        </div>
        <div className="flex items-center gap-4">
          <MdOutlineMailOutline className="text-xl" />
          <a href="mailto:htetwaiyan2101@gmail.com">htetwaiyan2101@gmail.com</a>
        </div>
        <div className="flex items-center gap-4">
          <FaGithub className="text-xl" />
          <a href="https://github.com/Htet-Wy" target="_blank">
            Htet-Wy
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-xl" />
          <a
            href="https://www.linkedin.com/in/htet-wai-yan-ab6802307/"
            target="_blank"
          >
            Htet Wai Yan
          </a>
        </div>
      </motion.div>
      <p className="text-gray-300 mt-4 text-center dark:text-gray-700">
        Developed by{" "}
        <a href="https://github.com/Htet-Wy" target="_blank">
          @HtetWaiYan
        </a>
      </p>
    </section>
  );
};

export default Contact;
