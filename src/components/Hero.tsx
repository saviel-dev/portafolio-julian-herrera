import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaBootstrap, FaNodeJs, FaDownload, FaPython, FaJava, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiN8N, SiPostman, SiPostgresql, SiDocker, SiSupabase } from 'react-icons/si';
import { useEffect, useState } from "react";
import { useLanguage } from '@/context/LanguageContext';

const technologies = [
  { name: 'HTML | CSS | JS', icon: <div className="flex -space-x-1 mr-1"><FaHtml5 className="w-4 h-4 text-[#E34F26] relative z-30" /><FaCss3Alt className="w-4 h-4 text-[#1572B6] relative z-20" /><FaJs className="w-4 h-4 text-[#F7DF1E] relative z-10" /></div> },
  { name: 'React', icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="w-4 h-4 text-[#7952B3]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
  { name: 'PHP', icon: <FaPhp className="w-4 h-4 text-[#777BB4]" /> },
  { name: 'Python', icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
  { name: 'Java', icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
  { name: 'MySQL', icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
  { name: 'n8n', icon: <SiN8N className="w-4 h-4 text-[#EA4B71]" /> },
  { name: 'Postman', icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
  { name: 'Docker', icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> }
];

const Hero = () => {
  const { t, language } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [animatedTitle, setAnimatedTitle] = useState("");

  // Re-run typing animation whenever the title changes (language switch)
  useEffect(() => {
    setTypedText("");
    let index = 0;
    const fullText = t.hero.title;
    const typingSpeed = 70;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [t.hero.title]);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 md:pt-32 pb-16 w-full"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-teal-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-semibold mb-3 animate-fade-in tracking-wide text-sm uppercase">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-5xl font-extrabold text-gray-900 mb-5 animate-fade-in-delay-200 leading-tight tracking-tight">
            {typedText}<span className="animate-pulse text-blue-500">|</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 animate-fade-in-delay-400 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-in-delay-600">
            <button
              className="project-button"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="project-button_lg">
                <span className="project-button_sl"></span>
                <span className="project-button_text">
                  <FaCode className="w-4 h-4" />
                  {t.hero.verProyectos}
                </span>
              </span>
            </button>
            <a
              href={`/documents/CV%20-%20Juli%C3%A1n%20Herrera%20(${language === 'EN' ? 'En' : 'Es'}).pdf`}
              download={`CV - Julián Herrera (${language === 'EN' ? 'En' : 'Es'}).pdf`}
              className="cv-button"
            >
              <span className="cv-button_lg">
                <span className="cv-button_sl"></span>
                <span className="cv-button_text">
                  <FaDownload className="w-4 h-4" />
                  {t.hero.descargarCV}
                </span>
              </span>
            </a>
          </div>

          <div className="mt-16 animate-fade-in-delay-800">
            <span className="text-gray-500 block mb-4">{t.hero.tecnologias}</span>
            <div className="flex gap-3 flex-wrap">
              {technologies.map((tech, idx) => (
                <span
                  key={tech.name}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-sm text-gray-700 flex items-center gap-1.5 animate-pop-in"
                  style={{ animationDelay: `${800 + idx * 100}ms` }}
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-fade-in-delay-1200">
        <a href="#sobre-mi" className="text-gray-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
