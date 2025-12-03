import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import CTAButton from "../components/CTAButton";
import gymImg from "../assests/images/gym.avif"

const socialLinks = [
  { Icon: Instagram, href: "https://instagram.com/alphagym", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com/alphagym", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com/alphagym", label: "Twitter" },
];

export default function Contact({ onJoinClick }) {
  return (
    <section id="contact" className="py-24 px-4 bg-black overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent" />

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
              READY TO TRANSFORM?
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Join the elite. Train with purpose. Become unstoppable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ----- LEFT CARD (Contact Info) ----- */}
          <MotionTilt>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl 
                         border border-zinc-700 rounded-3xl p-8 shadow-2xl
                         hover:border-red-600/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-3xl opacity-0 hover:opacity-100 transition-opacity" />

              <h3 className="text-2xl font-bold text-white mb-6">Visit Us</h3>

              <div className="space-y-6">
                <InfoItem Icon={MapPin} pulse>
                  <span className="text-gray-300">Avadi, Chennai</span>
                </InfoItem>
                <InfoItem Icon={Phone}>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-red-500 transition-colors">
                    +91 90807 35753
                  </a>
                </InfoItem>
                <InfoItem Icon={Mail}>
                  <a href="mailto:info@alphagym.in" className="text-gray-300 hover:text-red-500 transition-colors">
                    info@alphagym.in
                  </a>
                </InfoItem>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    whileHover={{ y: -4, scale: 1.2 }}
                    className="p-3 bg-zinc-800 rounded-full text-gray-400 hover:text-white 
                               hover:bg-red-600 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </MotionTilt>

          {/* ----- RIGHT CARD (Map + CTA) ----- */}
          <MotionTilt>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 backdrop-blur-xl 
                         border border-zinc-700 rounded-3xl p-8 shadow-2xl overflow-hidden
                         hover:border-red-600/50 transition-all duration-500"
            >
              {/* Mini Map (static) */}
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={gymImg}
                  alt="Alpha Gym Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                             w-4 h-4 bg-red-600 rounded-full shadow-lg shadow-red-600/50"
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Start Today</h3>
              <p className="text-gray-400 mb-8">
                Limited spots. First session free. No excuses.
              </p>

              <CTAButton
                onClick={onJoinClick}
                className="w-full text-xl py-5 font-bold text-center"
              >
                GET MEMBERSHIP
              </CTAButton>
            </motion.div>
          </MotionTilt>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3-D Tilt with Framer Motion ---------- */
const MotionTilt = ({ children }) => {
  return (
    <motion.div
      className="perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Reusable Info Row ---------- */
function InfoItem({ Icon, children, pulse }) {
  return (
    <div className="flex items-center gap-4 group">
      <div
        className={`p-3 rounded-xl bg-red-600/10 text-red-500 
                   group-hover:bg-red-600 group-hover:text-white 
                   transition-all duration-300 ${pulse ? "animate-pulse" : ""}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>{children}</div>
    </div>
  );
}
