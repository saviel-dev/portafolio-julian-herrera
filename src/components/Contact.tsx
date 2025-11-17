
import { useState, FormEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mjkyvgdr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      }

      // Show success message
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Gracias por contactarme. Te responderé lo más pronto posible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formRef = useRef<HTMLFormElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: { 
        type: 'spring',
        stiffness: 400,
        damping: 15 
      } 
    },
    tap: { scale: 0.98 },
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-sm uppercase tracking-wider text-blue-600 font-medium mb-3 px-4 py-1.5 bg-blue-50 rounded-full"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Contacto
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 w-full max-w-4xl mx-auto px-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ¿Tienes un proyecto en mente?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Estoy disponible para oportunidades de trabajo y colaboraciones. Envíame un mensaje y te responderé lo antes posible.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Correo electrónico</h3>
                  <a 
                    href="mailto:saviel.dev@gmail.com" 
                    className="text-blue-600 hover:underline break-all"
                  >
                    saviel.dev@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600">Ocumare del Tuy, Estado Miranda, Venezuela</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/saviel-julian-isculpi-herrera-102818346/" 
                    className="text-blue-600 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/saviel-julian-isculpi-herrera
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                  <a 
                    href="https://github.com/saviel-dev/" 
                    className="text-blue-600 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/saviel-dev
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaGlobe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Portafolio Freelance</h3>
                  <a 
                    href="https://julianherrera.vercel.app/" 
                    className="text-blue-600 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    julianherrera.vercel.app
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => {
                        if (!formData.name.trim()) {
                          setErrors(prev => ({ ...prev, name: 'El nombre es requerido' }));
                        } else if (errors.name) {
                          const { name, ...rest } = errors;
                          setErrors(rest);
                        }
                      }}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => {
                        if (!formData.email.trim()) {
                          setErrors(prev => ({ ...prev, email: 'El correo electrónico es requerido' }));
                        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                          setErrors(prev => ({ ...prev, email: 'Por favor ingresa un correo electrónico válido' }));
                        } else if (errors.email) {
                          const { email, ...rest } = errors;
                          setErrors(rest);
                        }
                      }}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => {
                        if (!formData.message.trim()) {
                          setErrors(prev => ({ ...prev, message: 'El mensaje es requerido' }));
                        } else if (errors.message) {
                          const { message, ...rest } = errors;
                          setErrors(rest);
                        }
                      }}
                      rows={5}
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none`}
                      placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-sans text-base font-medium w-full bg-blue-600 text-white py-3 px-6 rounded-xl overflow-hidden transition-all duration-200 flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className="text-white"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span className="ml-2">Enviar mensaje</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
