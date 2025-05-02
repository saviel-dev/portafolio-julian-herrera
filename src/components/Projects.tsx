
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Web App",
      description:
        "Una tienda en línea completa con catálogo de productos, carrito de compras, y sistema de pago. Implementada con HTML, CSS y JavaScript puro, con diseño responsive para móviles.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2340&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage API"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Manager App",
      description:
        "Aplicación de gestión de tareas con funcionalidades CRUD, categorización, filtrado y almacenamiento local. Interfaz intuitiva que permite al usuario organizar sus pendientes eficientemente.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2148&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Panel meteorológico que consume datos de una API externa para mostrar información del clima actual y pronóstico de 5 días para cualquier ciudad. Incluye gráficos visuales y geolocalización.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2340&auto=format&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "APIs externas"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-2">
            Mi Trabajo
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una muestra de mis proyectos recientes implementados con HTML, CSS y JavaScript.
            Cada proyecto demuestra diferentes habilidades y soluciones a problemas específicos.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
