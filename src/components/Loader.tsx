import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black z-10">
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
};

export default Loader;
