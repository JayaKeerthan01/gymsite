import { motion } from "framer-motion";

export default function FacilityCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-8 rounded-lg text-center border border-red-900/50 hover:border-red-600 transition"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}