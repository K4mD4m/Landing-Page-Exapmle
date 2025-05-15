import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";
import CTAButton from "../components/CTA";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-white text-4xl md:text-5xl font-bold mb-6"
        >
          Create briefs in seconds. Powered by AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-300 text-base md:text-lg max-w-xl mx-auto"
        >
          Streamline your creative process with fast, clear and smart briefs —
          perfect for freelancers, agencies, and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6"
        >
          <CTAButton label="See Pricing" to="/pricing" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
