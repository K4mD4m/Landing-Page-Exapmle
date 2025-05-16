import { Link } from "react-router-dom";
import { Bot, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => (
  <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-4 relative overflow-hidden">
    {/* Animated AI bot icon */}
    <motion.div
      initial={{ y: -40, opacity: 0, rotate: -10 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className="mb-6"
    >
      <Bot className="w-20 h-20 text-cyan-400 drop-shadow-[0_0_24px_#0ff]" />
    </motion.div>
    {/* Glowing background blob */}
    <motion.div
      className="absolute -z-10 top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500 opacity-20 rounded-full blur-3xl"
      initial={{ scale: 0.7, opacity: 0.1 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      style={{ transform: "translate(-50%, -50%)" }}
    />
    {/* 404 Text */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-7xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_24px_#0ff]"
    >
      404
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-4 text-xl md:text-2xl text-gray-200 text-center max-w-xl"
    >
      Oops! Our AI couldn't find this page.
      <br />
      Maybe it’s still learning... or you found a secret dimension!
    </motion.p>
    {/* Back to home button */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-8"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-lg transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
