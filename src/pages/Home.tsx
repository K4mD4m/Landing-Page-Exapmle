import { motion } from "framer-motion";
import heroVideo from "../assets/hero.mp4";
import CTAButton from "../components/CTA";
import { Sparkles, FileText, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end }: { end: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(Math.floor(end * 0.6));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const value = Math.floor((0.6 + 0.4 * progress) * end);
      setCount(value);

      if (currentStep >= steps) {
        clearInterval(interval);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [hasAnimated, end]);

  return (
    <div ref={ref}>
      <h3 className="text-4xl font-bold mb-1">{count.toLocaleString()}+</h3>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
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
            <CTAButton label="See plans" to="/pricing" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent z-20" />
      </section>

      {/* HOW IT WORKS */}
      <section className="relative bg-[#0f0f0f] py-32 px-6 overflow-hidden">
        {/* ANIMATED BG BLOBS */}
        <motion.div
          className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-30 z-0"
          animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-30 z-0"
          animate={{ x: [0, -30, 30, 0], y: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Sparkles size={40} className="text-blue-400 mb-4" />,
                title: "Input your idea",
                desc: "Describe your project. Our AI gets to work instantly.",
              },
              {
                icon: <FileText size={40} className="text-blue-400 mb-4" />,
                title: "Get your brief",
                desc: "Receive a smart, structured brief ready to go.",
              },
              {
                icon: <Send size={40} className="text-blue-400 mb-4" />,
                title: "Refine & share",
                desc: "Tweak and export your brief with one click.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 text-white shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0c0c0c] text-white py-36 px-6 overflow-hidden">
        {/* BG DECORATION */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-10 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* SECTION TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r text-blue-400 bg-clip-text mb-6">
            Why MeetBrief?
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-20 rounded-full" />

          <div className="space-y-20">
            {[
              {
                title: "No more messy docs.",
                subtitle:
                  "Structure and clarity from the first draft. Instantly.",
              },
              {
                title: "Briefs that actually brief.",
                subtitle:
                  "Everything you need, nothing you don’t. Built for doing.",
              },
              {
                title: "AI that gets it.",
                subtitle:
                  "Our models are trained to understand creative workflows — not just words.",
              },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
                  {point.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative bg-[#0c0c0c] py-32 px-6 overflow-hidden text-white">
        {/* BACKGROUND BLOBS */}
        <motion.div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-20" />
        <motion.div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
            viewport={{ once: true }}
          >
            Join the growing community using MeetBrief
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-14"
            viewport={{ once: true }}
          >
            Thousands of creatives already use AI-powered briefs to save time
            and stay clear. You could be one of them.
          </motion.p>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16">
            {[
              { label: "Briefs generated", end: 12420 },
              { label: "Users onboarded", end: 2390 },
              { label: "Teams using MeetBrief", end: 482 },
            ].map(({ label, end }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter end={end} />
                <p className="text-gray-400 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Placeholders */}
          <div className="text-gray-500 italic text-sm mb-12">
            Trusted by freelancers, design studios, and startups worldwide
          </div>

          <CTAButton label="Create your first brief" to="/app" />
        </div>
      </section>
    </>
  );
};

export default Home;
