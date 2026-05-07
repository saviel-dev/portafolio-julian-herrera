
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Maximize2, X } from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | string[];
  technologies: Technology[];
  demoLink?: string;
  codeLink?: string;
  index?: number;
  viewMode?: 'lista' | 'cards';
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink,
  index = 0,
  viewMode = 'lista',
}: ProjectCardProps) => {
  const isGrid = viewMode === 'cards';

  return (
    <motion.div
      className={`flex flex-col ${isGrid ? '' : 'md:flex-row'} gap-6 md:gap-10 items-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden p-4 md:p-6 h-full`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image / Carousel */}
      <div className={`w-full ${isGrid ? '' : 'md:w-[380px]'} shrink-0 relative group`}>
        {Array.isArray(image) ? (
          <Carousel className="w-full">
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  className="w-full rounded-xl overflow-hidden border-2 border-blue-600 shadow-sm cursor-pointer relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>

                  <CarouselContent>
                    {image.map((img, i) => (
                      <CarouselItem key={i}>
                        <img
                          src={img}
                          alt={`${title} - image ${i + 1}`}
                          className="w-full h-52 md:h-56 object-cover bg-gray-100"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 overflow-visible bg-transparent border-none shadow-none [&>button:last-child]:hidden">
                <DialogTitle className="sr-only">Ver imagen de {title}</DialogTitle>
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <DialogClose className="absolute -top-12 -right-4 md:-right-12 p-2 text-white/70 hover:text-white transition-colors">
                    <X className="w-8 h-8" />
                    <span className="sr-only">Cerrar</span>
                  </DialogClose>
                  
                  <Carousel className="w-full h-full">
                    <CarouselContent>
                      {image.map((img, i) => (
                        <CarouselItem key={i} className="flex items-center justify-center">
                          <img
                            src={img}
                            alt={`${title} - full image ${i + 1}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4 md:-left-16 bg-white/10 hover:bg-white/30 text-white border-white/20 p-2 h-10 w-10 md:h-12 md:w-12" />
                    <CarouselNext className="-right-4 md:-right-16 bg-white/10 hover:bg-white/30 text-white border-white/20 p-2 h-10 w-10 md:h-12 md:w-12" />
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
            {/* Carousel Controls OUTSIDE DialogTrigger */}
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2 z-20 pointer-events-none">
              <CarouselPrevious className="static translate-y-0 pointer-events-auto h-7 w-7 bg-white/80 hover:bg-white" />
              <CarouselNext className="static translate-y-0 pointer-events-auto h-7 w-7 bg-white/80 hover:bg-white" />
            </div>
          </Carousel>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                className="w-full rounded-xl overflow-hidden border-2 border-blue-600 shadow-sm cursor-pointer relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 md:h-56 object-cover bg-gray-100"
                />
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 overflow-visible bg-transparent border-none shadow-none [&>button:last-child]:hidden">
              <DialogTitle className="sr-only">Ver imagen de {title}</DialogTitle>
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <DialogClose className="absolute -top-12 -right-4 md:-right-12 p-2 text-white/70 hover:text-white transition-colors">
                  <X className="w-8 h-8" />
                  <span className="sr-only">Cerrar</span>
                </DialogClose>
                <img
                  src={image}
                  alt={`${title} - full view`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4 w-full">
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
