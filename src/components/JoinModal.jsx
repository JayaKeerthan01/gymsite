import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CTAButton from "./CTAButton";

export default function JoinModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetAndClose = () => {
    setFormData({ name: "", phone: "", email: "" });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={resetAndClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gray-900 border border-red-900 rounded-lg p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!submitted ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
                  JOIN ALPHA GYM
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-red-900 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-red-900 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-red-900 rounded text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition"
                  />
                  <CTAButton className="w-full text-lg">SUBMIT & JOIN</CTAButton>
                </form>
                <p className="text-center text-gray-500 text-sm mt-4">
                  We'll contact you within 2 hours.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-center py-8"
              >
                <div className="text-6xl mb-4">Success</div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  Welcome to the Pack!
                </h3>
                <p className="text-gray-400 mb-6">
                  Our team will call you shortly to activate your membership.
                </p>
                <CTAButton onClick={resetAndClose}>CLOSE</CTAButton>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}