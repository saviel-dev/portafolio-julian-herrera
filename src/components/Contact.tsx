
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "¡Mensaje enviado con Exito!",
        description: "Gracias por contactarme. Te responderé lo mas pronto que pueda.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-medium mb-2">
            Contacto
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Interesado en trabajar juntos?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades y colaboraciones.
            No dudes en contactarme para discutir tu proyecto o propuesta.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-blue-600">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <a href="mailto:saviel.dev@gmail.com" className="text-blue-600 hover:underline" target="_blank">
                saviel.dev@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-blue-600">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Ubicación</h4>
              <p className="text-gray-600">Estado Miranda, Venezuela</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-blue-600">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/saviel-julian-isculpi-herrera-102818346/" className="text-blue-600 hover:underline" target="_blank">
                /in/saviel-julian-isculpi-herrera-102818346
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@gmail.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tu mensaje aqui...."
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
