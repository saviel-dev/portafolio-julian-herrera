import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  cargo: string;
  empresa: string;
  año: string;
  estado: string;
  responsabilidades: string[];
}

const experiences: ExperienceItem[] = [
  {
    cargo: "Desarrollador Full-Stack",
    empresa: "NxLabs",
    año: "122023 - 092024",
    estado: "Finalizado",
    responsabilidades: [
      "Colaboración en el desarrollo de aplicaciones web y plataformas de e-commerce",
      "Participación activa en proyectos de gran escala",
      "Integración de sistema POS, enfocado en PHP y Laravel"
    ]
  },
  {
    cargo: "Pasante Informático",
    empresa: "Ferretería Santa Elena",
    año: "052025 - 082025",
    estado: "Finalizado",
    responsabilidades: [
      "Administración, contaduría e informática",
      "Gestión de cuentas por cobrar y seguridad informática",
      "Implementación de inteligencia artificial y OneDrive para procesos",
      "Desarrollo de aplicación de escritorio offline para área contable"
    ]
  },
  {
    cargo: "Programador Full Stack Freelancer",
    empresa: "Independiente",
    año: "092024 - Actualmente",
    estado: "Actualmente",
    responsabilidades: [
      "Especialista en desarrollo de landing pages y e-commerce",
      "Software a medida y automatizaciones con n8n",
      "Desarrollo en Rust: bots para Discord y módulos blockchain (NFTs, contratos inteligentes, scripts básicos para wallets)",
      "Soluciones personalizadas para potenciar negocios digitales"
    ]
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4">
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-200 pl-6 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] group-hover:bg-gray-400 transition-colors"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
              ></motion.div>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-medium">{exp.cargo}</h3>
                    <p className="text-gray-600 text-sm">{exp.empresa}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-500">{exp.año}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      exp.estado === 'Actualmente' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {exp.estado}
                    </span>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                  {exp.responsabilidades.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 + 0.3 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
