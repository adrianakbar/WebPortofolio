import { motion } from "framer-motion";
import Lanyard from "../blocks/Components/Lanyard/Lanyard";

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Left Section: Description */}
      <motion.div
        className="md:w-1/2 text-center md:text-left ml-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-700 text-lg">
          I am a passionate full-stack developer with experience in mobile and
          web development. Let's build something amazing together!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Me
        </button>
      </motion.div>

      {/* Right Section: Profile Photo */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]}/>
      </motion.div>

    </div>
  );
};
