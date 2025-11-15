import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">ABOUT ALPHA GYM</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for warriors. Designed for results. We don't just train — we transform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Elite Equipment", desc: "Top-tier machines from Rogue, Hammer Strength & Life Fitness." },
            { title: "Pro Trainers", desc: "Certified coaches with 10+ years of competitive experience." },
            { title: "24/7 Access", desc: "Train anytime. No excuses. Full access for members." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg border border-red-900/50"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}