
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="sobre-mi" 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="w-full h-80 md:h-96 bg-blue-600 rounded-lg relative z-10 overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]"></div>
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center text-white font-bold text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {'</>'}
                </motion.div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-80 md:h-96 border-2 border-gray-900 rounded-lg"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              ></motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >Sobre Mí</motion.h2>
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pasión por crear soluciones digitales impactantes
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Soy un desarrollador full-stack con experiencia en crear aplicaciones y sitios web dinámicss y responsives. 
              Mi enfoque se centra en escribir código limpio y optimizado para ofrecer la mejor experiencia de usuario.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Con un fuerte conocimiento en HTML, CSS y JavaScript, construyo tanto interfaces de usuario atractivas como 
              funcionalidades backend robustas. Disfruto resolviendo problemas complejos y transformando ideas en aplicaciones web funcionales.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">HTML5, CSS3 y JS, tailwindcss, bootstrap, React, Responsive Design</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Express.js, Laravel, Rust, Bases de datos</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Herramientas</h4>
                <p className="text-sm text-gray-600">Git, GitHub, VS Code, Terminal, cursor, Miro, UXpilot</p>
              </motion.div>
              <motion.div 
                className="bg-white p-4 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.3 }}
              >
                <h4 className="font-bold text-gray-900 mb-2">Soft Skills</h4>
                <p className="text-sm text-gray-600">Resolución de problemas, Trabajo en equipo, Comunicación, Creatividad, Adaptabilidad, proactivo</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contáctame
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
