import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  cargo: string;
  empresa: string;
  año: string;
  estado: string;
  descripcion: string;
  logro?: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    cargo: "Freelancer",
    empresa: "Independiente",
    año: "2024 - Actualmente",
    estado: "Actualmente",
    descripcion: "Me desempeño de forma independiente ofreciendo edición de video para contenido digital y redes sociales, además de diseño de flyers y material gráfico para marcas y emprendimientos. También desarrollo páginas web modernas, landing pages y tiendas en línea, así como aplicaciones web con funcionalidades personalizadas según las necesidades de cada cliente."
  },
  {
    cargo: "Desarrollador Full Stack",
    empresa: "Tiunet-Web, C.A",
    año: "2025 - 2026",
    estado: "Finalizado",
    descripcion: "Desarrollé páginas y aplicaciones web personalizadas, incluyendo un sistema de autolavado con gestión de roles, inventario y POS, además de una plataforma para certificación de carnets. Me destaqué por aprender de forma autónoma y mejorar soluciones existentes.",
    logro: "Optimización de procesos operativos y reducción significativa de tareas repetitivas dentro de la organización mediante la automatización."
  },
  {
    cargo: "Desarrollador Full Stack Colaborador",
    empresa: "NxLabs.io",
    año: "2023 - 2025",
    estado: "Finalizado",
    descripcion: "Colaboré en el desarrollo de aplicaciones web y plataformas de e-commerce, así como en la integración de sistemas POS a gran escala.",
    logro: "Implementación de automatizaciones avanzadas en Excel con macros para el procesamiento y consolidación de datos, logrando la creación de reportes dinámicos con tablas y gráficos.",
    link: "https://nxlabs.io"
  },
  {
    cargo: "Pasante de Informática",
    empresa: "Ferretería Santa Elena, C.A",
    año: "2024",
    estado: "Finalizado",
    descripcion: "Brindé apoyo en contabilidad, ventas, administración y seguridad informática. También implementé compras a crédito por Cashea y realicé la parametrización entre Profit Plus y el banco BNC.",
    logro: "Desarrollo de una aplicación de escritorio local en Python para gestionar de manera ágil y segura las cuentas por cobrar sin necesidad de conexión a internet."
  }
];

const Experience = () => {
  const [verMas, setVerMas] = useState(false);
  const visibles = experiences.slice(0, 3);
  const extras = experiences.slice(3);

  const renderItem = (exp: ExperienceItem, index: number, baseDelay = 0) => (
    <motion.div
      key={index}
      className="border-l-2 border-gray-200 pl-6 relative group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: baseDelay + index * 0.15 }}
    >
      <motion.div
        className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] group-hover:bg-gray-400 transition-colors"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: baseDelay + index * 0.15 + 0.2 }}
      ></motion.div>
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-lg font-medium">{exp.cargo}</h3>
            {exp.link ? (
              <a 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1 transition-colors w-fit"
              >
                {exp.empresa}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            ) : (
              <p className="text-gray-600 text-sm">{exp.empresa}</p>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">{exp.año}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${exp.estado === 'Actualmente' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
              {exp.estado}
            </span>
          </div>
        </div>
        <motion.p
          className="mt-3 text-sm text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: baseDelay + index * 0.15 + 0.3 }}
        >
          {exp.descripcion}
        </motion.p>
        {exp.logro && (
          <motion.div
            className="mt-4 p-4 bg-blue-50/70 border border-blue-100 rounded-lg text-sm text-blue-900 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: baseDelay + index * 0.15 + 0.4 }}
          >
            <span className="font-semibold flex items-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-blue-600">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Logro Destacado
            </span>
            <p className="pl-6 text-gray-700 leading-relaxed">{exp.logro}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="experience"
      className="py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.h2
          className="text-2xl font-medium mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experiencia Profesional
        </motion.h2>
        <div className="space-y-12">
          {visibles.map((exp, index) => renderItem(exp, index))}

          <AnimatePresence>
            {verMas && extras.map((exp, index) => (
              <motion.div
                key={`extra-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                style={{ overflow: 'hidden' }}
              >
                {renderItem(exp, index, 0.1)}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {extras.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVerMas(!verMas)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {verMas ? 'Ver menos' : `Ver más (${extras.length} más)`}
              <span className={`transition-transform duration-300 ${verMas ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Experience;
