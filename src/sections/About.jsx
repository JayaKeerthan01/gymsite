import { motion } from "framer-motion";
import { Dumbbell, Users, Clock } from "lucide-react";

const features = [
  {
    title: "Elite Equipment",
    desc: "Top-tier machines from Rogue, Hammer Strength & Life Fitness.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pro Trainers",
    desc: "Certified coaches with 10+ years of competitive experience.",
    icon: Users,
    image: "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "24/7 Access",
    desc: "Train anytime. No excuses. Full access for members.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

// Spring config for buttery smooth hover
const hoverSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-7xl

 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              ABOUT ALPHA GYM
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Built for warriors. Designed for results. We don't just train — we <span className="text-red-500">transform</span>.
          </p>
        </motion.div>

        {/* Smooth Hover Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl"
              // SUPER SMOOTH HOVER
              whileHover={{
                y: -12,
                scale: 1.025,
                transition: hoverSpring,
              }}
              transition={hoverSpring}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileHover={{ scale: 1.08 }}
                  transition={hoverSpring}
                  style={{ willChange: "transform" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Floating Icon Badge */}
                <motion.div
                  className="absolute top-4 right-4 p-3 rounded-xl border backdrop-blur-sm
                             bg-red-600/20 border-red-600/40 text-white"
                  whileHover={{
                    backgroundColor: "rgb(220, 38, 38)",
                    borderColor: "rgb(239, 68, 68)",
                    scale: 1.1,
                  }}
                  transition={hoverSpring}
                >
                  <item.icon className="w-6 h-6" strokeWidth={2.2} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-7">
                <motion.h3
                  className="text-2xl font-bold text-white mb-3 tracking-tight"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>

              {/* Animated Bottom Bar */}
              <motion.div
                className="h-1 bg-gradient-to-r from-red-600 to-yellow-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1, transition: { duration: 0.4 } }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}