import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Footer = () => (
  <footer className="relative w-full bg-[#111827] border-t border-white/10 shadow-[0_0_16px_#0ff2]">
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left */}
      <div className="flex flex-col items-center md:items-start gap-1 md:w-1/3">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight flex items-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_8px_#0ff]"
        >
          Meet<span className="ml-1">Brief</span>
        </Link>
        <span className="text-sm text-gray-400 mt-1">Crafted with ☕</span>
      </div>
      {/* Center */}
      <nav className="flex gap-6 text-gray-400 text-sm font-medium md:w-1/3 justify-center">
        <Link to="/privacy" className="hover:text-white transition">
          Privacy
        </Link>
        <Link to="/terms" className="hover:text-white transition">
          Terms
        </Link>
        <Link to="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </nav>
      {/* Right */}
      <div className="flex flex-col items-center md:items-end gap-1 md:w-1/3">
        <a
          href="https://github.com/K4mD4m/Landing-Page-Exapmle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition text-xs"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6 text-blue-400 hover:text-white transition" />
        </a>
        <span className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} K4mD4m
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
