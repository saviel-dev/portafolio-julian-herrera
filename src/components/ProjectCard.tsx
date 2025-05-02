
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
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
      <div className="w-full lg:w-1/2 h-80 md:h-96 overflow-hidden rounded-lg shadow-md relative group">
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
