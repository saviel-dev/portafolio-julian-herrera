
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-teal-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-medium mb-4">Hola, soy <b>Saviel</b></p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Desarrollador Full-Stack
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desarrollo Aplicaciones y paginas webs con tecnologias modernas
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver proyectos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctame
            </Button>
          </div>
          
          <div className="mt-16 flex items-center gap-2">
            <span className="text-gray-500">Tecnologías:</span>
            <div className="flex gap-4 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">HTML, CSS y JS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">PHP</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Bootstrap</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">React</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Express.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">laravel</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">MySQL</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre-mi" className="text-gray-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
