import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero({ onJoinClick }) {  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
          alt="Gym Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-bold text-red-600 mb-4 leading-tight"
          style={{ fontFamily: '"Bebas Neue", sans-serif' }}
        >
          UNLEASH YOUR INNER BEAST
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Train Hard. Transform Forever.
        </motion.p>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <CTAButton onClick={onJoinClick}>JOIN NOW</CTAButton>
        </motion.div>
      </div>
    </section>
  );
}