import { motion } from "framer-motion";

export default function CTAButton({ children, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-red-600 text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-red-700 transition ${className}`}
    >
      {children}
    </motion.button>
  );
}