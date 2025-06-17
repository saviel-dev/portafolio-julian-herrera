
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoLink?: string;
  codeLink?: string;
  reversed?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
  reversed = false,
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-8 items-center",
      reversed && "lg:flex-row-reverse"
    )}>
      <motion.div 
        className="w-full lg:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-md relative group"
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <motion.div 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out object-contain"
          style={{ 
            backgroundImage: `url(${image})`, 
            backgroundSize: image.includes('e-ecommerce.png') ? 'contain' : 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </motion.div>

      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h3 
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >{title}</motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >{description}</motion.p>
        
        <motion.div 
          className="mb-6 flex flex-wrap gap-2 sm:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1.5 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700 whitespace-nowrap flex items-center gap-1.5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
            >
              <tech.icon className="w-4 h-4" />
              {tech.name}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {demoLink && (
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open(demoLink, '_blank')}
            >
              Ver Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link ml-2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
              </svg>
            </Button>
          )}
          {codeLink && (
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => window.open(codeLink, '_blank')}
            >
              Ver Código
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github ml-2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </Button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
