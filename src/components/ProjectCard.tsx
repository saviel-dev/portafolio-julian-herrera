
import { cn } from "@/lib/utils";
import { motion, Variants } from 'framer-motion';
import { Button } from "@/components/ui/button";

const buttonVariants: Variants = {
  hover: {
    y: -2,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98
  }
};

const iconVariants: Variants = {
  hover: (rotate: number) => ({
    scale: 1.1,
    rotate: rotate,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  })
};

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
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Image */}
      <div className="h-48 md:h-56 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 flex items-center gap-1.5 border border-gray-100"
            >
              <tech.icon className="w-3 h-3" />
              {tech.name}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-500">
              +{technologies.length - 4} más
            </span>
          )}
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3 pt-2 border-t border-gray-100">
          {demoLink && (
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full"
            >
              <Button
                size="sm"
                className="text-xs h-8 px-3 w-full justify-center gap-1.5 relative overflow-hidden group bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
                onClick={() => window.open(demoLink, '_blank')}
              >
              <motion.svg 
                custom={15}
                variants={iconVariants}
                whileHover="hover"
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" x2="21" y1="14" y2="3"/>
              </motion.svg>
              Demo
            </Button>
            </motion.div>
          )}
          {codeLink && (
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="w-full"
            >
              <Button
                size="sm"
                className="text-xs h-8 px-3 w-full justify-center gap-1.5 relative overflow-hidden group bg-gray-900 hover:bg-white text-white hover:text-gray-900 border-2 border-gray-900 hover:border-gray-900 transition-colors"
                onClick={() => window.open(codeLink, '_blank')}
              >
              <motion.svg 
                custom={5}
                variants={iconVariants}
                whileHover="hover"
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </motion.svg>
              Código
            </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
