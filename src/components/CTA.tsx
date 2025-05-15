import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTAButtonProps {
  label: string;
  to: string;
}

const CTAButton = ({ label, to }: CTAButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        to={to}
        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-xl border border-blue-500 bg-blue-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default CTAButton;
