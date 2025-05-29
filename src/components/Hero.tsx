
import { Button } from "@/components/ui/button";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaNodeJs, FaLaravel, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiExpress } from 'react-icons/si';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      id="inicio" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 rounded-full bg-teal-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.p 
            className="text-blue-600 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >Hola, soy <b>Julian</b></motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Desarrollador Full-Stack
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Desarrollo Aplicaciones y paginas webs con tecnologias modernas
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver proyectos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctame
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center gap-2"
              onClick={() => window.open('/documents/cv-julian.pdf', '_blank')}
            >
              <FaDownload className="w-4 h-4" />
              Descargar CV
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-gray-500 block mb-4">Tecnologías:</span>
            <motion.div 
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaHtml5 className="w-4 h-4 text-[#E34F26]" />
                HTML
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaCss3Alt className="w-4 h-4 text-[#1572B6]" />
                CSS
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaJs className="w-4 h-4 text-[#F7DF1E]" />
                JavaScript
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaPhp className="w-4 h-4 text-[#777BB4]" />
                PHP
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />
                Tailwind CSS
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaBootstrap className="w-4 h-4 text-[#7952B3]" />
                Bootstrap
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaReact className="w-4 h-4 text-[#61DAFB]" />
                React
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaNodeJs className="w-4 h-4 text-[#339933]" />
                Node.js
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <SiExpress className="w-4 h-4" />
                Express.js
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <FaLaravel className="w-4 h-4 text-[#FF2D20]" />
                Laravel
              </span>
              <span className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5">
                <SiMysql className="w-4 h-4 text-[#4479A1]" />
                MySQL
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <a href="#sobre-mi" className="text-gray-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
