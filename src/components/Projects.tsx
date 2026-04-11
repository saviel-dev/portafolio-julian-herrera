import ProjectCard from "./ProjectCard";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaGithub, FaLaravel, FaNodeJs, FaBolt, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiWebrtc, SiLaravel } from 'react-icons/si';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Plataforma Integral de Gestión de Campañas WhatsApp",
      description: "Sistema avanzado en Laravel y Node.js para crear, enviar y monitorear campañas masivas de WhatsApp con análisis en tiempo real y gestión automatizada de respuestas.",
      image: "/img/proyecto.png",
      technologies: [
        { name: "Laravel", icon: SiLaravel },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Livewire", icon: FaBolt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "WebSocket", icon: SiWebrtc },
      ],
      codeLink: "https://github.com/saviel-dev/laravel-whatsapp-saas",
    },
    {
      title: "Sistema Administrativo de Inventario Nazca",
      description: "Gestión eficiente de inventario con funcionalidades rápidas, exportación PDF/CSV, control por sede, alertas y registro detallado de movimientos.",
      image: "/img/proyecto.png",
      technologies: [
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql },
        { name: "JavaScript", icon: FaJs },
        { name: "CSS/SCSS", icon: FaCss3Alt },
        { name: "HTML5", icon: FaHtml5 },
      ],
      codeLink: "https://github.com/saviel-dev/App-Web-Nazca",
    },
    {
      title: "Página Web - Kalhua Café",
      description: "Página web para un emprendimiento de cafetería en Venezuela, especializado en marquesas y próximamente café. Desarrollado con tecnologías modernas y diseño responsivo.",
      image: "/img/kalhua cafe.png",
      technologies: [
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: FaReact },
        { name: "shadcn/ui", icon: FaCode, className: "text-foreground" },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      demoLink: "https://kalhua-web.vercel.app/",
      codeLink: "https://github.com/saviel-dev/kalhua-rustica-digital",
    },
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
      className="py-24 bg-gray-50/60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white text-base font-mono">&lt;/&gt;</span>
            Proyectos
          </motion.h3>
          <motion.p
            className="text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Una muestra de mis proyectos recientes. Cada uno demuestra diferentes habilidades y soluciones a problemas reales.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
