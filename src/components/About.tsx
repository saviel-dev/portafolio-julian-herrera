
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-blue-600 rounded-lg relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-6xl">
                  {'</>'}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-80 md:h-96 border-2 border-gray-900 rounded-lg"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-2">Sobre Mí</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pasión por crear soluciones digitales impactantes
            </h3>
            <p className="text-gray-600 mb-4">
              Soy un desarrollador full-stack con experiencia en crear aplicaciones y sitios web dinámicss y responsives. 
              Mi enfoque se centra en escribir código limpio y optimizado para ofrecer la mejor experiencia de usuario.
            </p>
            <p className="text-gray-600 mb-6">
              Con un fuerte conocimiento en HTML, CSS y JavaScript, construyo tanto interfaces de usuario atractivas como 
              funcionalidades backend robustas. Disfruto resolviendo problemas complejos y transformando ideas en aplicaciones web funcionales.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <p className="text-sm text-gray-600">HTML5, CSS3 y JS, tailwindcss, bootstrap, React, Responsive Design</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <p className="text-sm text-gray-600">Node.js, Express.js, Laravel, Bases de datos</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Herramientas</h4>
                <p className="text-sm text-gray-600">Git, GitHub, VS Code, Terminal, cursor, Miro, UXpilot</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Soft Skills</h4>
                <p className="text-sm text-gray-600">Resolución de problemas, Trabajo en equipo, Comunicación, Creatividad, Adaptabilidad, proactivo</p>
              </div>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctame
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
