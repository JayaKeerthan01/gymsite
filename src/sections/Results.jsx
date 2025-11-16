import { motion } from "framer-motion";
import { TrendingUp, Calendar, User } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

const transformations = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer → Beast Mode",
    before: "https://images.unsplash.com/photo-1549570652-97324981a6fd?w=800",
    after: "https://images.unsplash.com/photo-1581129724998-5a7239a5c2b2?w=800",
    stats: { weight: "-18kg", time: "4 months", sessions: "96" },
    testimonial: "From dad bod to stage-ready. Alpha changed my life.",
  },
  {
    name: "Priya Sharma",
    role: "Teacher → Fitness Model",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    after: "https://images.unsplash.com/photo-1605296867424-35f8e9b30498?w=800",
    stats: { weight: "-12kg", time: "3 months", sessions: "72" },
    testimonial: "Stronger, confident, and finally in control.",
  },
  {
    name: "Amit Patel",
    role: "Student → Powerlifter",
    before: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
    stats: { weight: "+25kg muscle", time: "6 months", sessions: "144" },
    testimonial: "Bench 100kg → 140kg. Alpha is home.",
  },
  {
    name: "Neha Singh",
    role: "Mom → Marathon Ready",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    after: "https://images.unsplash.com/photo-1552673599-7cb3a2996e31?w=800",
    stats: { weight: "-15kg", time: "5 months", sessions: "110" },
    testimonial: "Running 10K without stopping. Thank you, Alpha!",
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
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

export default function Results() {
  return (
    <section id="results" className="py-24 px-4 bg-black overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              REAL RESULTS
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 font-medium max-w-3xl mx-auto">
            No filters. No excuses. Just <span className="text-red-500">transformation</span>.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-xl 
                           border border-zinc-700 rounded-3xl p-6 shadow-2xl overflow-hidden
                           hover:border-red-600/60 hover:shadow-2xl hover:shadow-red-600/20
                           transition-all duration-500"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Slider */}
                <div className="relative z-10 mb-6">
                  <BeforeAfterSlider before={t.before} after={t.after} />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-red-500" />
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 text-sm">
                    <Stat icon={TrendingUp} value={t.stats.weight} />
                    <Stat icon={Calendar} value={t.stats.time} />
                    <Stat icon={User} value={t.stats.sessions} />
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    "{t.testimonial}"
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Stat
function Stat({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      <Icon className="w-4 h-4 text-red-500" />
      <span className="font-medium">{value}</span>
    </div>
  );
}