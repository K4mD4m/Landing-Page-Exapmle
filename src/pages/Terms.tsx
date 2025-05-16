import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => (
  <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
    {/* Animated Terms icon */}
    <motion.div
      initial={{ y: -30, opacity: 0, rotate: 8 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="mb-6"
    >
      <FileText className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_18px_#0ff]" />
    </motion.div>
    {/* Glowing background blob */}
    <motion.div
      className="absolute -z-10 top-1/2 left-1/2 w-[350px] h-[350px] bg-cyan-500 opacity-20 rounded-full blur-3xl"
      initial={{ scale: 0.7, opacity: 0.1 }}
      animate={{ scale: 1, opacity: 0.2 }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      style={{ transform: "translate(-50%, -50%)" }}
    />
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_18px_#0ff] mb-4 text-center"
    >
      Terms &amp; Conditions
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-gray-200 text-lg text-center max-w-2xl mb-8"
    >
      By using MeetBrief, you agree not to use our AI for evil, world
      domination, or sending spammy briefs. We promise to keep things fair, fun,
      and as bug-free as possible!
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-2"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold shadow-lg transition"
      >
        Back to Home
      </Link>
    </motion.div>
  </div>
);

export default Terms;
