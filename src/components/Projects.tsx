
import ProjectCard from "./ProjectCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-ecommerce con pasarela de pago",
      description:
        "E-commerce con funcionalidades de carrito de compras, pagos seguros y gestión de pedidos. Hecho con react con TS, ofrece una experiencia de compra fluida y segura.",
      image: "/img/e-ecommerce.png",
      technologies: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "MongoDB", icon: SiMongodb },
      ],
      demoLink: "https://micaserita.com.pe/",
      codeLink: "https://github.com/saviel-dev/Simulador-de-Pasarela-de-pago",
    },
    {
      title: "Sistema de Gestion de Clientes",
      description:
        "Optimiza la gestión de tus clientes con nuestro sistema dinámico diseñado para pequeños negocios. Construido con PHP, Bootstrap y MySQL, te ayudará a tener un control más eficiente de tus interacciones y datos de clientes.",
      image: "/img/clientsManager.png",
      technologies: [
        { name: "PHP", icon: FaPhp },
        { name: "Bootstrap 5", icon: FaBootstrap },
        { name: "MySQL", icon: SiMysql },
      ],
      codeLink: "https://github.com/saviel-dev/Gestor-de-clientes-sencillo",
    },
    {
      title: "Adminstrador de Tareas",
      description:
        "Aplicación de gestión de tareas con funcionalidades CRUD, categorización, filtrado y almacenamiento local. Interfaz intuitiva que permite al usuario organizar sus pendientes eficientemente.",
      image: "/img/listadoTareas.png",
      technologies: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
      ],
      demoLink: "https://listado-tareas-jh.vercel.app/",
      codeLink: "https://github.com/saviel-dev/Listado-de-tareas",
    },
  ];

  return (
    <motion.section 
      id="proyectos" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mi Trabajo
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Proyectos Destacados
          </motion.h3>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Una muestra de mis proyectos recientes implementados con HTML, CSS y JavaScript.
            Cada proyecto demuestra diferentes habilidades y soluciones a problemas específicos.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                reversed={index % 2 !== 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
