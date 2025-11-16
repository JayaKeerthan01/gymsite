import { motion } from "framer-motion";

export default function CTAButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-full
        bg-gradient-to-r from-red-600 to-red-700
        px-8 py-4 text-white font-bold text-lg tracking-wider
        shadow-xl hover:shadow-red-600/50
        transition-all duration-300
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        whileHover={{ opacity: 0.2, x: "-100%" }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.6 }}
        style={{ transform: "skew(-20deg)" }}
      />
    </motion.button>
  );
}