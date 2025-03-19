import React, { useState } from 'react';
import { ArrowRight, Code2, Notebook as Robot, Smartphone, Lightbulb, Globe, CheckCircle2, Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Ecommerce y Desarrollo Web',
    description: 'Creamos plataformas digitales efectivas y personalizadas para que tu negocio venda en línea de manera segura y escalable, mejorando la experiencia del usuario y aumentando tus ventas.'
  },
  {
    icon: <Robot className="w-8 h-8" />,
    title: 'Automatización de procesos',
    description: 'Implementamos soluciones tecnológicas que optimizan tareas repetitivas, reducen errores humanos y aumentan la eficiencia operativa, permitiendo que tu equipo se enfoque en lo estratégico.'
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps intuitivas y funcionales que conectan tu negocio con los clientes de manera rápida y directa, mejorando la accesibilidad y la interacción con tu marca.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Consultoría de Transformación Digital',
    description: 'Te guiamos en la adopción de nuevas tecnologías, identificando oportunidades de mejora e implementando estrategias que impulsen la digitalización y el crecimiento sostenible de tu negocio.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Optimización de la Presencia en Línea',
    description: 'Fortalecemos tu visibilidad en internet mediante estrategias de posicionamiento y marketing digital, asegurando que tu marca llegue al público correcto en el momento adecuado.'
  }
];

const testimonials = [
  {
    name: 'Uso Carruso',
    role: 'Monda´s own talker',
    image: 'https://scontent.feoh14-1.fna.fbcdn.net/v/t1.6435-9/74477363_2532720856805340_6246151748658921472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGw7xbKY7LRMN2CjZGgcoUg0VsJHreR4nnRWwket5HiealIssc9g0Y8gtBGERV2Xb014wScwbUbCidXJsfn57VE&_nc_ohc=xSJ6nSzHSfoQ7kNvgFEE3K0&_nc_oc=AdnT08cSLMGvRJI0ZIPDrug5_wwaOBgLqTKphaGrKfMes6ByiuKRXZOH_Axz1EwxH0c&_nc_zt=23&_nc_ht=scontent.feoh14-1.fna&_nc_gid=6CC_3JxteUc6d9BHoMAukw&oh=00_AYG-lY9egAaKg7JucAQR8SdIJukXL2W-kKApve75gcJk4w&oe=6801841A',
    quote: 'UpTek transformó por completo nuestras operaciones comerciales. Sus soluciones nos ayudaron a hablar más monda en un 300%.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateCo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    quote: 'The expertise and dedication of the UpTek team are unmatched. They delivered beyond our expectations.'
  }
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleConsultation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsModalOpen(false);
    alert('Muchas gracias. En breve nos pondremos en contacto con usted para programar su consulta.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hi%20UpTek!%20I%27m%20interested%20in%20your%20services.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-green-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('inicio')}>
                UpTek
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-800 hover:text-purple-600">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-800 hover:text-purple-600">Servicios</button>
              <button onClick={() => scrollToSection('usuarios')} className="text-gray-800 hover:text-purple-600">Usuarios</button>
              <button onClick={() => scrollToSection('contactos')} className="text-gray-800 hover:text-purple-600">Contacto</button>
              <button 
                onClick={handleScheduleConsultation}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Haz tu cotización
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="inicio"
        className="pt-32 pb-24 px-4 bg-cover bg-center min-h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80")',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            "Impulsa tu negocio al futuro digital"
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Tecnología que eleva tu empresa con soluciones innovadoras y accesibles.
          </p>
          <button 
            onClick={handleScheduleConsultation}
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2 mx-auto"
          >
            Empieza ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Quienes somos */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              En UpTek ayudamos a negocios a crecer en el mundo digital a través de estrategias tecnológicas personalizadas.
              Nos enfocamos en la digitalización, automatización y optimización de procesos, garantizando resultados medibles y escalabilidad.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Trabajo en equipo"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                onClick={handleScheduleConsultation}
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 px-4 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Ventajas de elegir UpTek</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Tecnología de Vanguardia', 'Acompañamiento Continuo', 'Resultados Medibles', 'Soluciones Personalizadas'].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center gap-y-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      /* {/* Usuarios */}
      <section id="usuarios" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Usuarios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">El futuro de su empresa empieza hoy</h2>
          <p className="text-xl mb-8">¿Está preparado para dar el salto?</p>
          <button 
            onClick={handleScheduleConsultation}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Agenda tu consulta
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contactos" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">UpTek</h3>
              <p className="text-gray-400">De lo tradicional a lo digital, sin límites".</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contactanos</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contact@uptek.com" className="hover:text-green-400">contact@uptek.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <a href="tel:+573006233026" className="hover:text-green-400">+57 (300) 6233026</a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Síguenos en redes sociales</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/uptek_/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-green-400"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-green-400"><Twitter className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 UpTek. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center gap-2 group"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        <span className="hidden group-hover:inline whitespace-nowrap">Chatea con nosotros</span>
      </button>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Programe su consulta gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;