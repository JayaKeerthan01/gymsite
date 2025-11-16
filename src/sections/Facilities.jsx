import { motion } from "framer-motion";
import FacilityCard from "../components/FacilityCard";

// Lucide Icons – super sharp, consistent stroke, perfect for premium gyms
import {
  Dumbbell,
  Weight,
  Bike,
  Swords,
  HeartPulse,
  Utensils,
} from "lucide-react";

const facilities = [
  {
    Icon: Dumbbell,
    title: "Powerlifting Zone",
    description: "Full Olympic platforms, calibrated plates, competition benches.",
  },
  {
    Icon: Weight,
    title: "Free Weights",
    description: "Dumbbells up to 150lbs, specialty bars, chains.",
  },
  {
    Icon: Bike,
    title: "Cardio Arena",
    description: "Assault bikes, rowers, stair climbers, treadmills.",
  },
  {
    Icon: Swords,
    title: "Combat Area",
    description: "Boxing ring, MMA cage, heavy bags, speed bags.",
  },
  {
    Icon: HeartPulse,
    title: "Recovery Lab",
    description: "Sauna, ice baths, massage guns, stretch zone.",
  },
  {
    Icon: Utensils,
    title: "Nutrition Bar",
    description: "Protein shakes, meal prep, supplements on-site.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Gradient Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              WORLD-CLASS FACILITIES
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Engineered for champions. Train like a pro, recover like a king.
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <FacilityCard {...facility} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}