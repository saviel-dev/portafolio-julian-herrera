
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoLink?: string;
  codeLink?: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
  index = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden p-4 md:p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <motion.div
        className="w-full md:w-[380px] shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-52 md:h-56 object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          {title}
        </h3>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700"
            >
              <tech.icon className={`w-3.5 h-3.5 ${tech.className ?? ''}`} />
              {tech.name}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-1">
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-900 bg-white text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub className="w-4 h-4" />
              Code
            </motion.a>
          )}
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-blue-600 bg-white text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" x2="21" y1="14" y2="3"/>
              </svg>
              Preview
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
