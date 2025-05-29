import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Actualmente",
    title: "Desarrollador Full-Stack",
    company: "NxLabs",
    description: [
      "Colaboración en el desarrollo de aplicaciones web y plataformas de e-commerce",
      "Participación activa en proyectos de gran escala",
      "Integración de sistema POS"
    ]
  },
  {
    period: "2024",
    title: "Pasante",
    company: "Ferretería Santa Elena",
    description: [
      "Gestión de contabilidad, ventas, administración y seguridad informática",
      "Implementación de compras a crédito por Cashea",
      "Parametrización entre Profit Plus y el banco BNC",
      "Desarrollo de aplicación de escritorio en Python para gestión de cuentas por cobrar offline"
    ]
  },
  {
    period: "Freelance",
    title: "Desarrollador Independiente",
    company: "",
    description: [
      "Desarrollo de páginas web personalizadas",
      "Creación de aplicaciones de escritorio usando Electron"
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
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                {exp.company && (
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                )}
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  {exp.description.map((item, idx) => (
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
