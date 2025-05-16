import { motion } from "framer-motion";
import { Github, Globe, Mail } from "lucide-react";

const contactItems = [
  {
    label: "GitHub",
    icon: <Github size={28} className="text-blue-400" />,
    href: "https://github.com/K4mD4m",
    description: "Explore my work and recent projects.",
  },
  {
    label: "Portfolio",
    icon: <Globe size={28} className="text-blue-400" />,
    href: "https://www.k4md4m.pl/",
    description: "See my design & development portfolio.",
  },
  {
    label: "Email",
    icon: <Mail size={28} className="text-blue-400" />,
    href: "mailto:kamyszekdamian@outlook.com",
    description: "Want to work together? Reach out directly.",
  },
];

const Contact = () => {
  return (
    <section className="relative bg-[#0c0c0c] text-white min-h-screen py-32 px-6 overflow-hidden">
      {/* BLOBS */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20 z-0"
        animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-20 z-0"
        animate={{ x: [0, -30, 30, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Get in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto text-base md:text-lg mb-16"
        >
          Let’s build something together. Contact me via any of the platforms
          below.
        </motion.p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {contactItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 text-left hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-full bg-white/5">{item.icon}</div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {item.label}
                </h3>
              </div>
              <p className="text-white text-sm">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
