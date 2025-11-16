import { motion } from "framer-motion";

export default function FacilityCard({ Icon, title, description, index }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-2xl p-6 h-full
                 backdrop-blur-sm overflow-hidden transition-all duration-300
                 group-hover:border-red-600/60 group-hover:shadow-2xl group-hover:shadow-red-600/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Subtle background pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="p-3 rounded-xl bg-red-600/10 text-red-500 
                       group-hover:bg-red-600 group-hover:text-white 
                       transition-all duration-300 
                       flex items-center justify-center"
          >
            <Icon className="w-6 h-6" strokeWidth={2.2} />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

        {/* Accent line */}
        <div className="mt-4 h-px bg-gradient-to-r from-red-600/60 via-red-600/30 to-transparent w-1/3" />
      </div>
    </motion.div>
  );
}