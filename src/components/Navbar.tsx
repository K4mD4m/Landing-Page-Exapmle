import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-[0_0_20px_#00ffff20]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-white tracking-tight">
          Meet<span className="text-blue-500">Brief</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`relative text-xl font-medium transition-all duration-200 ${
                location.pathname === path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {name}
              {location.pathname === path && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 rounded"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white transition z-10"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ backgroundColor: "#0f0f0fe6" }}
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`text-2xl font-semibold ${
                  location.pathname === path
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
