import { motion } from "framer-motion";
import { TrendingUp, Calendar, User } from "lucide-react";
import BeforeM from "../assests/images/before-M.jpg";
import AfterM from "../assests/images/After-M.jpg"
import BeforeF from "../assests/images/Before-F.jpg"
import AfterF from "../assests/images/After-F.jpg"


const transformations = [
  {
    name: "Arjun",
    role: "Software Engineer → Beast Mode",
    before: BeforeM,
    after: AfterM,
    stats: { weight: "-18kg", time: "4 months", sessions: "96" },
    testimonial: "From dad bod to stage-ready. Alpha changed my life.",
  },
  {
    name: "Priya",
    role: "Teacher → Fitness Model",
    before: BeforeF,
    after: AfterF,
    stats: { weight: "-12kg", time: "3 months", sessions: "72" },
    testimonial: "Stronger, confident, and finally in control.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function Results() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-yellow-500 font-bold text-sm tracking-widest mb-4">
          REAL RESULTS
        </h2>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          No filters. No excuses. Just transformation.
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-12"
      >
        {transformations.map((t, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="relative bg-zinc-900 rounded-2xl overflow-hidden"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent" />

            {/* Split Image Container */}
            <div className="relative h-96 flex">
              {/* Before Side */}
              <div className="w-1/2 relative overflow-hidden">
                <img
                  src={t.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BEFORE
                </div>
              </div>

              {/* After Side */}
              <div className="w-1/2 relative overflow-hidden border-l-4 border-yellow-500">
                <img
                  src={t.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  AFTER
                </div>
              </div>

              {/* Center Divider Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 transform -translate-x-1/2 z-10" />
            </div>

            {/* Info Section */}
            <div className="p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
              <p className="text-yellow-500 mb-4">{t.role}</p>

              {/* Stats */}
             <div className="flex gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-yellow-500" size={20} />
                  <span className="text-sm font-bold">{t.stats.weight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-yellow-500" size={20} />
                  <span className="text-sm font-bold">{t.stats.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="text-yellow-500" size={20} />
                  <span className="text-sm font-bold">
                    {t.stats.sessions} sessions
                  </span>
                </div>
              </div>

              <p className="text-gray-400 italic">"{t.testimonial}"</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
