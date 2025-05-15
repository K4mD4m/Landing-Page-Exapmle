import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CTAButtonProps {
  label: string;
  to: string;
}

const CTAButton = ({ label, to }: CTAButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        to={to}
        className="px-6 py-3 text-lg font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-md shadow-blue-500/40 transition-all duration-300"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default CTAButton;
