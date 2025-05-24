
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestion de Clientes",
      description:
        "Optimiza la gestión de tus clientes con nuestro sistema dinámico diseñado para pequeños negocios. Construido con PHP, Bootstrap y MySQL, te ayudará a tener un control más eficiente de tus interacciones y datos de clientes.",
      image: "/img/clientsManager.png",
      technologies: ["PHP", "Bootstrap 5", "MYSQL"],
      codeLink: "https://github.com/saviel-dev/Gestor-de-clientes-sencillo",
    },
    {
      title: "Adminstrador de Tareas",
      description:
        "Aplicación de gestión de tareas con funcionalidades CRUD, categorización, filtrado y almacenamiento local. Interfaz intuitiva que permite al usuario organizar sus pendientes eficientemente.",
      image: "/img/listadoTareas.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      demoLink: "https://listado-tareas-jh.vercel.app/",
      codeLink: "https://github.com/saviel-dev/Listado-de-tareas",
    },
    {
      title: "E-ecommerce pasarela de pago (Desarrollo en curso)",
      description:
        "E-commerce con funcionalidades de carrito de compras, pagos seguros y gestión de pedidos. Hecho con react con TS, ofrece una experiencia de compra fluida y segura.",
      image: "/img/e-ecommerce.png",
      technologies: ["HTML, CSS, JS", "Tailwind css", "React", "APIs externas", "TS", "API"],
      demoLink: "https://caseritaweb.vercel.app/",
      codeLink: "https://github.com/saviel-dev/Simulador-de-Pasarela-de-pago",
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
