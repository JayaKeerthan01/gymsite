import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";

export default function Contact({ onJoinClick }) {  // ← ADD THIS PROP
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-6xl font-bold text-red-600 mb-8"
        >
          READY TO TRANSFORM?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 mb-12"
        >
          Join Alpha Gym today and start your journey to greatness.
        </motion.p>

        <div className="space-y-6 mb-12">
          <p className="text-lg">Mumbai, India</p>
          <p className="text-lg">+91 98765 43210</p>
          <p className="text-lg">info@alphagym.in</p>
        </div>

        {/* NOW WORKS */}
        <CTAButton onClick={onJoinClick} className="text-xl px-12 py-5">
          GET MEMBERSHIP
        </CTAButton>
      </div>
    </section>
  );
}