import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaGitAlt, FaUbuntu } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technoogies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* MongoDB */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Node.js */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        {/* MySQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4">
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        {/* Postman */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>

        {/* Git */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <FaGitAlt className="text-7xl text-red-600" />
        </motion.div>

        {/* Ubuntu */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <FaUbuntu className="text-7xl text-orange-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technoogies;
