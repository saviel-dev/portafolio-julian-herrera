import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaGithub, FaLaravel, FaNodeJs, FaBolt, FaCode, FaList, FaThLarge } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiWebrtc, SiLaravel, SiSupabase, SiGit, SiFramer } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// Static project metadata (links, images, technologies) - untranslated
const projectsMeta = [
  {
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
    image: [
      "/img/autolavadogochi/autolavadogochi.png",
      "/img/autolavadogochi/autolavadogochi2.png",
      "/img/autolavadogochi/autolavadogochi3.png"
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "shadcn/ui", icon: FaCode, className: "text-foreground" },
      { name: "Supabase", icon: SiSupabase },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
    ],
    codeLink: "https://github.com/saviel-dev/sistema-de-autolavado-y-pos",
    demoLink: "https://autolavado-gochi.vercel.app/login",
  },
  {
    image: [
      "/img/babygoo/babygoo-shop.png",
      "/img/babygoo/admin-babygoo.png",
      "/img/babygoo/formulario_con_datos.png"
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
      { name: "Supabase", icon: SiSupabase },
      { name: "shadcn/ui", icon: FaCode, className: "text-foreground" },
    ],
    codeLink: "https://github.com/saviel-dev/babygoo-shop",
    demoLink: "https://babygoo-tienda-online.vercel.app/",
  },
  {
    image: "/img/iuttol-web.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
    ],
    codeLink: "https://github.com/saviel-dev/web-universitaria",
    demoLink: "https://iuttol.vercel.app/",
  },
  {
    image: "/img/evolvix global.png",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    demoLink: "https://evolvixglobal.es",
  },
  {
    image: "/img/metatok ai.png",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    demoLink: "https://metatok.ai",
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'lista' | 'cards'>('lista');

  // Merge translated text with static metadata
  const projects = projectsMeta.map((meta, i) => ({
    ...meta,
    title: t.projects.items[i].title,
    description: t.projects.items[i].description,
  }));

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
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white text-base font-mono">&lt;/&gt;</span>
              {t.projects.label}
            </motion.h3>
            <motion.p
              className="text-gray-600 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t.projects.description}
            </motion.p>
          </div>

          {/* Toggle buttons - hidden on mobile */}
          <motion.div
             className="hidden sm:flex items-center gap-1 bg-white rounded-xl p-1.5 shadow-sm border border-gray-200 self-start md:self-auto shrink-0"
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => setViewMode('lista')}
              className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${
                viewMode === 'lista' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
              title={t.projects.vistaLista}
              aria-label={t.projects.vistaLista}
            >
              <FaList className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${
                viewMode === 'cards' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
              title={t.projects.vistaTarjetas}
              aria-label={t.projects.vistaTarjetas}
            >
              <FaThLarge className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className={viewMode === 'lista' ? "flex flex-col gap-8" : "grid grid-cols-1 md:grid-cols-2 gap-8"}
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
              viewMode={viewMode}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
