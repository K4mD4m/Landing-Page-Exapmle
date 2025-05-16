import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Zap, Rocket, Users } from "lucide-react";
import CTAButton from "../components/CTA";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    icon: <Zap size={36} className="text-blue-400 mb-4" />,
    features: [
      "Generate up to 5 briefs/mo",
      "Basic AI structuring",
      "Export as text",
    ],
    unavailable: ["Collaboration tools", "Custom branding", "Priority support"],
    button: { label: "Start for free", to: "/contact" },
  },
  {
    name: "Pro",
    price: "12",
    icon: <Rocket size={36} className="text-purple-400 mb-4" />,
    features: [
      "Unlimited briefs",
      "Advanced AI options",
      "PDF & Notion export",
      "Light customization",
    ],
    unavailable: ["Team access", "Priority support"],
    button: { label: "Go Pro", to: "/contact" },
    highlight: true,
  },
  {
    name: "Team",
    price: "29",
    icon: <Users size={36} className="text-green-400 mb-4" />,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom branding",
      "Advanced analytics",
      "Priority support",
      "Additional features",
    ],
    unavailable: [],
    button: { label: "Start Team Plan", to: "/contact" },
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-[#0c0c0c] text-white min-h-screen py-32 px-6 overflow-hidden">
      {/* Animated Blobs */}
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

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center mb-16 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Simple, transparent pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto text-base md:text-lg"
        >
          Choose the plan that suits your workflow. No hidden fees.
        </motion.p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: false }}
            className={`relative rounded-2xl border border-white/10 p-8 shadow-lg transition-all duration-300 ${
              plan.highlight
                ? "bg-[#1a1a1a] border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                : "bg-[#111]"
            }`}
          >
            {plan.icon}
            <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              ${plan.price}
              <span className="text-lg text-gray-400">/mo</span>
            </p>

            <ul className="text-left space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle2 className="text-blue-400 mr-2" size={18} />
                  {feature}
                </li>
              ))}
              {plan.unavailable.map((feature, i) => (
                <li
                  key={`un-${i}`}
                  className="flex items-center text-gray-500 line-through"
                >
                  <XCircle className="text-gray-500 mr-2" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <CTAButton label={plan.button.label} to={plan.button.to} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
