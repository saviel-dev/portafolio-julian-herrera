import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface Translations {
  // Header / Nav
  nav: {
    inicio: string;
    sobreMi: string;
    experiencia: string;
    proyectos: string;
    contactame: string;
    idioma: string;
  };
  // Hero
  hero: {
    greeting: string;
    title: string;
    description: string;
    verProyectos: string;
    descargarCV: string;
    tecnologias: string;
  };
  // About
  about: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    frontend: string;
    backend: string;
    baseDatos: string;
    herramientas: string;
    contactame: string;
  };
  // Experience
  experience: {
    heading: string;
    verMas: (n: number) => string;
    verMenos: string;
    actualmente: string;
    finalizado: string;
    logroLabel: string;
    items: {
      cargo: string;
      empresa: string;
      año: string;
      estado: string;
      descripcion: string;
      logro?: string;
      link?: string;
    }[];
  };
  // Projects
  projects: {
    label: string;
    description: string;
    vistaLista: string;
    vistaTarjetas: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  // Contact
  contact: {
    heading: string;
    subheading: string;
    email: string;
    nombre: string;
    mensaje: string;
    enviar: string;
    enviando: string;
    placeholder: {
      nombre: string;
      email: string;
      mensaje: string;
    };
    errors: {
      nombreReq: string;
      emailReq: string;
      emailInvalid: string;
      mensajeReq: string;
    };
    swal: {
      successTitle: string;
      successText: string;
      successBtn: string;
      errorTitle: string;
      errorFallback: string;
    };
  };
  // Footer
  footer: {
    tagline: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  ES: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      experiencia: 'Experiencia',
      proyectos: 'Proyectos',
      contactame: 'Contáctame',
      idioma: 'Idioma',
    },
    hero: {
      greeting: 'Hola, soy Julian 👋',
      title: 'Desarrollador Full-Stack',
      description: 'Desarrollador web y TSU en Informática enfocado en crear soluciones digitales funcionales, modernas y orientadas a la experiencia del usuario. Me especializo en transformar ideas en productos claros, eficientes y bien estructurados.',
      verProyectos: 'Ver proyectos',
      descargarCV: 'Descargar CV',
      tecnologias: 'Tecnologías:',
    },
    about: {
      label: 'Sobre Mí',
      heading: 'Construyendo productos claros, funcionales y bien organizados',
      p1: 'Soy desarrollador web con formación en informática y experiencia en la creación de soluciones digitales, automatización de tareas y apoyo a proyectos web. Me apasiona construir productos bien organizados y siempre busco aportar valor real.',
      p2: 'Me enfoco en construir productos claros, funcionales y bien organizados, siempre buscando aportar valor, aprender continuamente y trabajar con compromiso.',
      frontend: 'Frontend',
      backend: 'Backend',
      baseDatos: 'Bases de Datos',
      herramientas: 'Herramientas',
      contactame: 'Contáctame',
    },
    experience: {
      heading: 'Experiencia Profesional',
      verMas: (n) => `Ver más (${n} más)`,
      verMenos: 'Ver menos',
      actualmente: 'Actualmente',
      finalizado: 'Finalizado',
      logroLabel: 'Logro Destacado',
      items: [
        {
          cargo: 'Freelancer',
          empresa: 'Independiente',
          año: '2024 - Actualmente',
          estado: 'Actualmente',
          descripcion: 'Me desempeño de forma independiente ofreciendo edición de video para contenido digital y redes sociales, además de diseño de flyers y material gráfico para marcas y emprendimientos. También desarrollo páginas web modernas, landing pages y tiendas en línea, así como aplicaciones web con funcionalidades personalizadas según las necesidades de cada cliente.',
        },
        {
          cargo: 'Desarrollador Full Stack',
          empresa: 'Tiunet-Web, C.A',
          año: '2025 - 2026',
          estado: 'Finalizado',
          descripcion: 'Desarrollé páginas y aplicaciones web personalizadas, incluyendo un sistema de autolavado con gestión de roles, inventario y POS, además de una plataforma para certificación de carnets. Me destaqué por aprender de forma autónoma y mejorar soluciones existentes.',
          logro: 'Optimización de procesos operativos y reducción significativa de tareas repetitivas dentro de la organización mediante la automatización.',
        },
        {
          cargo: 'Desarrollador Full Stack Colaborador',
          empresa: 'NxLabs.io',
          año: '2023 - 2025',
          estado: 'Finalizado',
          descripcion: 'Colaboré en el desarrollo de aplicaciones web y plataformas de e-commerce, así como en la integración de sistemas POS a gran escala.',
          logro: 'Implementación de automatizaciones avanzadas en Excel con macros para el procesamiento y consolidación de datos, logrando la creación de reportes dinámicos con tablas y gráficos.',
          link: 'https://nxlabs.io',
        },
        {
          cargo: 'Pasante de Informática',
          empresa: 'Ferretería Santa Elena, C.A',
          año: '2024',
          estado: 'Finalizado',
          descripcion: 'Brindé apoyo en contabilidad, ventas, administración y seguridad informática. También implementé compras a crédito por Cashea y realicé la parametrización entre Profit Plus y el banco BNC.',
          logro: 'Desarrollo de una aplicación de escritorio local en Python para gestionar de manera ágil y segura las cuentas por cobrar sin necesidad de conexión a internet.',
        },
      ],
    },
    projects: {
      label: 'Proyectos',
      description: 'Una muestra de mis proyectos recientes. Cada uno demuestra diferentes habilidades y soluciones a problemas reales.',
      vistaLista: 'Vista de lista',
      vistaTarjetas: 'Vista de tarjetas',
      items: [
        {
          title: 'Página Web - Kalhua Café',
          description: 'Página web para un emprendimiento de cafetería en Venezuela, especializado en marquesas y próximamente café. Desarrollado con tecnologías modernas y diseño responsivo.',
        },
        {
          title: 'Sistema de Gestión de Autolavado Gochi',
          description: 'Plataforma integral para la gestión de servicios de autolavado, optimizando la programación de turnos, el seguimiento de clientes y el control administrativo del negocio.',
        },
        {
          title: 'Babygoo - MVP de Tienda Online para Bebés',
          description: 'MVP de una tienda virtual especializada en ropa y accesorios para bebés, con catálogo de productos, carrito de compras y panel de administración básico para la gestión de inventario.',
        },
        {
          title: 'IUTTOL Universidad - Landing Page',
          description: 'Diseño y desarrollo de una landing page moderna para el Instituto Universitario de Tecnología de los Llanos (IUTTOL), enfocada en la captación de nuevos estudiantes y la presentación de ofertas académicas.',
        },
        {
          title: 'Landing Page Evolvix Global',
          description: 'Landing page corporativa para Evolvix Global, un grupo B2B que transforma operaciones empresariales en crecimiento medible. Ofrecen servicios de consultoría estratégica, desarrollo tecnológico, automatización, comercio internacional, inteligencia de negocio, seguridad digital, gestión de proyectos e inteligencia artificial.',
        },
        {
          title: 'Landing Page MetaTok AI',
          description: 'Landing page para MetaTok AI, una plataforma que automatiza negocios mediante agentes de IA disponibles 24/7. Incluye funcionalidades para ventas, soporte al cliente, cobros, gestión de redes sociales, voicebots, cualificación de leads, integración con CRM, agendamiento automático y soluciones white-label.',
        },
        {
          title: 'MetaTok AI Landing Page',
          description: 'Landing page for MetaTok AI, a platform that automates businesses with 24/7 AI agents. Features include sales, customer support, collections, social media management, voicebots, lead qualification, CRM integration, scheduling, and white-label solutions.',
        },
      ],
    },
    contact: {
      heading: '¿Tienes un proyecto en mente?',
      subheading: 'Estoy disponible para oportunidades de trabajo y colaboraciones. Envíame un mensaje y te responderé lo antes posible.',
      email: 'Correo electrónico',
      nombre: 'Nombre completo',
      mensaje: 'Mensaje',
      enviar: 'Enviar mensaje',
      enviando: 'Enviando...',
      placeholder: {
        nombre: 'Tu nombre',
        email: 'tu@email.com',
        mensaje: 'Cuéntame sobre tu proyecto...',
      },
      errors: {
        nombreReq: 'El nombre es requerido',
        emailReq: 'El correo electrónico es requerido',
        emailInvalid: 'Por favor ingresa un correo electrónico válido',
        mensajeReq: 'El mensaje es requerido',
      },
      swal: {
        successTitle: '¡Mensaje enviado!',
        successText: 'Gracias por contactarme. Te responderé lo más pronto posible.',
        successBtn: 'Genial',
        errorTitle: 'Hubo un problema',
        errorFallback: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
      },
    },
    footer: {
      tagline: 'Construyendo experiencias web excepcionales.',
      rights: 'Todos los derechos reservados.',
    },
  },

  EN: {
    nav: {
      inicio: 'Home',
      sobreMi: 'About me',
      experiencia: 'Experience',
      proyectos: 'Projects',
      contactame: 'Contact me',
      idioma: 'Language',
    },
    hero: {
      greeting: 'Hi, I\'m Julian 👋',
      title: 'Full-Stack Developer',
      description: 'Web developer and TSU in Computer Science focused on creating functional, modern, and user-experience-oriented digital solutions. I specialize in transforming ideas into clear, efficient, and well-structured products.',
      verProyectos: 'View projects',
      descargarCV: 'Download CV',
      tecnologias: 'Technologies:',
    },
    about: {
      label: 'About Me',
      heading: 'Building clear, functional, and well-organized products',
      p1: 'I am a web developer with a background in computer science and experience creating digital solutions, automating tasks, and supporting web projects. I am passionate about building well-organized products and always strive to deliver real value.',
      p2: 'I focus on building clear, functional, and well-organized products, always seeking to add value, continuously learn, and work with commitment.',
      frontend: 'Frontend',
      backend: 'Backend',
      baseDatos: 'Databases',
      herramientas: 'Tools',
      contactame: 'Contact me',
    },
    experience: {
      heading: 'Professional Experience',
      verMas: (n) => `Show more (${n} more)`,
      verMenos: 'Show less',
      actualmente: 'Current',
      finalizado: 'Completed',
      logroLabel: 'Key Achievement',
      items: [
        {
          cargo: 'Freelancer',
          empresa: 'Self-employed',
          año: '2024 - Present',
          estado: 'Current',
          descripcion: 'I work independently offering video editing for digital content and social media, as well as flyer design and graphic material for brands and startups. I also develop modern websites, landing pages, and online stores, as well as web applications with customized functionality based on each client\'s needs.',
        },
        {
          cargo: 'Full Stack Developer',
          empresa: 'Tiunet-Web, C.A',
          año: '2025 - 2026',
          estado: 'Completed',
          descripcion: 'I developed custom web pages and applications, including a car wash management system with role management, inventory and POS, as well as a platform for ID card certification. I stood out for self-directed learning and improving existing solutions.',
          logro: 'Optimization of operational processes and significant reduction of repetitive tasks within the organization through automation.',
        },
        {
          cargo: 'Collaborative Full Stack Developer',
          empresa: 'NxLabs.io',
          año: '2023 - 2025',
          estado: 'Completed',
          descripcion: 'I collaborated in the development of web applications and e-commerce platforms, as well as in the large-scale integration of POS systems.',
          logro: 'Implementation of advanced Excel automations with macros for data processing and consolidation, achieving the creation of dynamic reports with tables and charts.',
          link: 'https://nxlabs.io',
        },
        {
          cargo: 'IT Intern',
          empresa: 'Ferretería Santa Elena, C.A',
          año: '2024',
          estado: 'Completed',
          descripcion: 'I provided support in accounting, sales, administration, and IT security. I also implemented credit purchases through Cashea and carried out parameterization between Profit Plus and BNC bank.',
          logro: 'Development of a local desktop application in Python to manage accounts receivable in an agile and secure manner without an internet connection.',
        },
      ],
    },
    projects: {
      label: 'Projects',
      description: 'A showcase of my recent projects. Each one demonstrates different skills and solutions to real-world problems.',
      vistaLista: 'List view',
      vistaTarjetas: 'Card view',
      items: [
        {
          title: 'Website - Kalhua Café',
          description: 'Website for a cafeteria startup in Venezuela, specialized in marquesas and soon coffee. Developed with modern technologies and responsive design.',
        },
        {
          title: 'Gochi Car Wash Management System',
          description: 'Comprehensive platform for car wash service management, optimizing shift scheduling, client tracking, and administrative business control.',
        },
        {
          title: 'Babygoo - Baby Online Store MVP',
          description: 'MVP of a virtual store specialized in baby clothing and accessories, with product catalog, shopping cart, and basic admin panel for inventory management.',
        },
        {
          title: 'IUTTOL University - Landing Page',
          description: 'Design and development of a modern landing page for the University Institute of Technology of the Plains (IUTTOL), focused on attracting new students and presenting academic offerings.',
        },
        {
          title: 'Evolvix Global Landing Page',
          description: 'Corporate landing page for Evolvix Global, a B2B group that transforms business operations into measurable growth. They offer strategic consulting, technological development, automation, international trade, business intelligence, digital security, project delivery, and AI.',
        },
        {
          title: 'Landing Page MetaTok AI',
          description: 'Landing page para MetaTok AI, una plataforma que automatiza negocios mediante agentes de IA disponibles 24/7. Incluye funcionalidades para ventas, soporte al cliente, cobros, gestión de redes sociales, voicebots, cualificación de leads, integración con CRM, agendamiento automático y soluciones white-label.',
        },
        {
          title: 'MetaTok AI Landing Page',
          description: 'Landing page for MetaTok AI, a platform that automates businesses with 24/7 AI agents. Features include sales, customer support, collections, social media management, voicebots, lead qualification, CRM integration, scheduling, and white-label solutions.',
        },
      ],
    },
    contact: {
      heading: 'Got a project in mind?',
      subheading: 'I am available for job opportunities and collaborations. Send me a message and I will get back to you as soon as possible.',
      email: 'Email address',
      nombre: 'Full name',
      mensaje: 'Message',
      enviar: 'Send message',
      enviando: 'Sending...',
      placeholder: {
        nombre: 'Your name',
        email: 'you@email.com',
        mensaje: 'Tell me about your project...',
      },
      errors: {
        nombreReq: 'Name is required',
        emailReq: 'Email address is required',
        emailInvalid: 'Please enter a valid email address',
        mensajeReq: 'Message is required',
      },
      swal: {
        successTitle: 'Message sent!',
        successText: 'Thank you for contacting me. I will reply as soon as possible.',
        successBtn: 'Great!',
        errorTitle: 'Something went wrong',
        errorFallback: 'Could not send the message. Please try again later.',
      },
    },
    footer: {
      tagline: 'Building exceptional web experiences.',
      rights: 'All rights reserved.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
