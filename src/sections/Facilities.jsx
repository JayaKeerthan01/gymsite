import { motion } from "framer-motion";
import FacilityCard from "../components/FacilityCard";

const facilities = [
  { icon: "🏋️", title: "Powerlifting Zone", description: "Full Olympic platforms, calibrated plates, competition benches." },
  { icon: "💪", title: "Free Weights", description: "Dumbbells up to 150lbs, specialty bars, chains." },
  { icon: "🛡️", title: "Cardio Arena", description: "Assault bikes, rowers, stair climbers, treadmills." },
  { icon: "🥊", title: "Combat Area", description: "Boxing ring, MMA cage, heavy bags, speed bags." },
  { icon: "🧘", title: "Recovery Lab", description: "Sauna, ice baths, massage guns, stretch zone." },
  { icon: "🍽️", title: "Nutrition Bar", description: "Protein shakes, meal prep, supplements on-site." },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-red-600 mb-16"
        >
          WORLD-CLASS FACILITIES
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f, i) => (
            <FacilityCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}