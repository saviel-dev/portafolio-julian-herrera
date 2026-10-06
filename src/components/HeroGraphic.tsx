import { motion } from "framer-motion";
import { FaCode, FaBolt, FaGlobe, FaFileAlt, FaDesktop, FaPaintBrush, FaShieldAlt } from "react-icons/fa";

const HeroGraphic = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-[4/3] flex items-center justify-center">
      {/* Background Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-blue-100/50 rounded-3xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl"></div>
        </div>
      </motion.div>

      {/* Floating Elements Wrapper */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        
        {/* Laptop/Screen */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 w-64 h-44 bg-[#1e2330] rounded-t-lg rounded-b-sm border-b-[8px] border-gray-300 shadow-2xl flex flex-col p-4"
        >
          {/* Code Lines */}
          <div className="w-3/4 h-3 bg-green-400 rounded-full mb-3"></div>
          <div className="w-full h-3 bg-blue-400 rounded-full mb-3"></div>
          <div className="w-5/6 h-3 bg-yellow-400 rounded-full mb-3"></div>
          <div className="w-4/5 h-3 bg-purple-400 rounded-full mb-3"></div>
          <div className="w-1/2 h-3 bg-red-400 rounded-full mb-3"></div>
          <div className="w-3/4 h-3 bg-cyan-400 rounded-full"></div>
        </motion.div>

        {/* Floating Icon 1: Code (Top Left) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg z-30"
        >
          <FaCode className="text-white text-xl" />
        </motion.div>

        {/* Floating Icon 2: Bolt (Bottom Left) */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[5%] w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg z-30"
        >
          <FaBolt className="text-white text-xl" />
        </motion.div>

        {/* Floating Icon 3: Shield (Top Right) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[30%] right-[5%] w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-30"
        >
          <FaShieldAlt className="text-white text-xl" />
        </motion.div>

        {/* Bottom Icons Row */}
        <div className="absolute bottom-[10%] flex gap-4 z-30">
          <motion.div 
             animate={{ y: [0, 5, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
             className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md"
          >
            <FaGlobe className="text-white text-lg" />
          </motion.div>
          <motion.div 
             animate={{ y: [0, -5, 0] }}
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
             className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md"
          >
            <FaFileAlt className="text-white text-lg" />
          </motion.div>
          <motion.div 
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
             className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center shadow-md"
          >
            <FaDesktop className="text-white text-lg" />
          </motion.div>
          <motion.div 
             animate={{ y: [0, -8, 0] }}
             transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center shadow-md"
          >
            <FaPaintBrush className="text-white text-lg" />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default HeroGraphic;
