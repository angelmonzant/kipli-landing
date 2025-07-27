import Head from 'next/head'
import SignupForm from '@/components/SignupForm'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kipli - Automatiza tu Negocio</title>
        <meta name="description" content="Kipli: Gestiona cobranzas, campañas de WhatsApp y fideliza clientes con IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Sticky Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-extrabold text-dark tracking-tight">Kipli</span>
              </div>
              {/* Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#features" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Características
                  </a>
                  <a href="#benefits" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Beneficios
                  </a>
                  <a href="#contact" className="text-dark hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section Rediseñada */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-white section-padding flex items-center min-h-[80vh]">
          <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Columna Izquierda: Texto y CTA */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-dark">
                Automatiza tu Negocio <br className="hidden md:block" />
                <span className="text-primary">con Kipli</span>
              </h1>
              <p className="text-lg md:text-2xl text-dark/80 mb-8 max-w-xl">
                Gestiona cobranzas, envía campañas por WhatsApp y fideliza clientes con IA. Todo en una sola plataforma.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              >
                <a href="#cta" className="btn-primary bg-primary text-dark hover:bg-lime-300 text-lg px-8 py-4 shadow-lg rounded-xl font-bold transition-colors duration-200">
                  Únete a la Beta
                </a>
                <a href="#demo" className="btn-secondary border-2 border-dark text-dark hover:bg-dark hover:text-white text-lg px-8 py-4 rounded-xl font-bold transition-colors duration-200">
                  Ver Demo
                </a>
              </motion.div>
              <div className="mt-8 text-gray-500 text-base flex items-center justify-center md:justify-start gap-2">
                <span className="text-xl">★</span> 4.9 en la experiencia de usuarios beta
              </div>
            </motion.div>

            {/* Columna Derecha: Mockup único limpio */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/mockups/mockup4.png"
                alt="Mockup Kipli principal"
                width={400}
                height={600}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
          {/* Gradiente decorativo de fondo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </section>

        {/* Sección: ¿Kipli funciona para tu negocio? */}
        <section id="funciona" className="section-padding bg-dark">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              ¿Kipli funciona para tu <span className="inline-block">negocio?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10">
              <span className="font-bold">¿Por qué también es un sistema?</span> <span className="text-primary">Contarás</span> con toda una serie de herramientas para <span className="text-primary">optimizar</span> muchas gestiones de tu negocio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Funcionalidades con animaciones y emojis */}
              {[
                { icon: '📦', title: 'Control de inventario', desc: 'Gestiona tu stock de productos de forma eficiente.' },
                { icon: '📊', title: 'Reportes con IA', desc: 'Obtén reportes inteligentes y visualiza el rendimiento.' },
                { icon: '🔐', title: 'Licencias de bloqueo/desbloqueo', desc: 'Controla el acceso a dispositivos y servicios.' },
                { icon: '🔁', title: 'Recordatorios de pago automáticos', desc: 'Automatiza los cobros y reduce la morosidad.' },
                { icon: '🧾', title: 'Recibos electrónicos', desc: 'Envía comprobantes digitales a tus clientes.' },
                { icon: '🧑‍💼', title: 'Panel multiusuario', desc: 'Gestiona tu equipo y asigna roles fácilmente.' },
                { icon: '🕒', title: 'Soporte 24/7', desc: 'Atención y ayuda en todo momento.' },
                { icon: '💡', title: 'Análisis de impago', desc: 'Detecta riesgos y toma mejores decisiones.' },
                { icon: '🧰', title: 'Módulo de proveedores y garantías', desc: 'Administra proveedores y gestiona garantías.' },
                { icon: '📈', title: 'Gestión de proveedores y garantías', desc: 'Optimiza relaciones y procesos con tus proveedores.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl bg-[#18191c] shadow-lg p-6 flex flex-col items-center border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.07 }}
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 #D0F60133' }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-primary text-lg mb-1">{item.title}</div>
                  <div className="text-white/80 text-sm text-center">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Sección: ¿De verdad es mi propia app? */}
        <section id="propia-app" className="section-padding bg-dark">
          <motion.div
            className="max-w-3xl mx-auto bg-[#18191c] rounded-3xl p-10 shadow-2xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-4">
              ¿De verdad es mi <span className="inline-block">propia app?</span> 🤔
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Es literalmente <span className="text-primary font-bold">tu propia app</span> a la cual le pondrás el nombre de tu preferencia, diseñarás tus propios <span className="text-primary font-bold">financiamientos</span>, asumirás el riesgo que consideres, y si deseas colocar <span className="text-primary font-bold">intereses</span> lo puedes hacer.
            </p>
            <ul className="text-white/80 text-left max-w-xl mx-auto space-y-3 mb-6">
              <li>✅ Todo por un solo pago</li>
              <li>✅ Sin comisiones ni porcentajes de intermediación</li>
              <li>✅ Saldrás a mercado con tu propia marca</li>
              <li>✅ Tú colocas tus reglas de negocio</li>
            </ul>
            <div className="text-primary font-bold text-lg">¡Hazlo a tu manera!</div>
          </motion.div>
        </section>

        {/* Sección de Características con gradiente y animación */}
        <section id="features" className="section-padding">
          <motion.div
            className="max-w-5xl mx-auto rounded-3xl p-8 md:p-12 bg-gradient-to-br from-dark via-black to-primary/30 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 text-center">
              Gestiona tu negocio, envía campañas, cobranza y automatiza con IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                className="rounded-2xl bg-white/90 shadow-xl flex flex-col items-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg mb-4" />
                <h3 className="font-bold text-dark text-lg mb-2">Módulo de Chat</h3>
                <p className="text-dark/70 text-sm text-center">Optimiza la comunicación con tus clientes vía WhatsApp, Facebook y email.</p>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className="rounded-2xl bg-white/90 shadow-xl flex flex-col items-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg mb-4" />
                <h3 className="font-bold text-dark text-lg mb-2">Gestión de Cobranza</h3>
                <p className="text-dark/70 text-sm text-center">Automatiza recordatorios, pagos y reportes. WhatsApp, Facebook y email.</p>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className="rounded-2xl bg-white/90 shadow-xl flex flex-col items-center p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg mb-4" />
                <h3 className="font-bold text-dark text-lg mb-2">Push Marketing</h3>
                <p className="text-dark/70 text-sm text-center">Optimiza la comunicación y campañas con IA. WhatsApp, Facebook y email.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Sección de Beneficios alternada, no lineal, con animaciones y placeholders */}
        <section id="benefits" className="section-padding">
          <div className="max-w-5xl mx-auto flex flex-col gap-16">
            {/* Bloque 1: Imagen izquierda, texto derecha */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="w-48 h-48 bg-gray-200 rounded-xl flex-shrink-0 mb-4 md:mb-0" />
              <div className="flex-1">
                <h3 className="text-dark font-bold text-lg mb-2">Un historial completo de tus clientes</h3>
                <p className="text-dark/70 text-base">Sigue y administra el estado de cada cliente, pagos y gestiona el historial de cada uno. Usa IA para obtener recomendaciones y mucho más.</p>
              </div>
            </motion.div>
            {/* Bloque 2: Texto izquierda, imagen derecha */}
            <motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="w-48 h-48 bg-gray-200 rounded-xl flex-shrink-0 mb-4 md:mb-0" />
              <div className="flex-1">
                <h3 className="text-dark font-bold text-lg mb-2">Kit de IA Integrado</h3>
                <p className="text-dark/70 text-base">Conoce a fondo a tus clientes, automatiza respuestas y personaliza campañas. Kipli integra IA para potenciar tu negocio.</p>
              </div>
            </motion.div>
            {/* Bloque 3: Video y texto */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="w-full md:w-2/5 aspect-video bg-dark rounded-xl flex items-center justify-center mb-4 md:mb-0">
                <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-dark font-extrabold text-xl mb-2">Relaciones a largo plazo</h3>
                <p className="text-dark/70 text-base mb-4">Construimos relaciones duraderas con nuestros clientes, ayudando a crecer tu negocio con tecnología de punta y soporte personalizado.</p>
                <a href="#" className="inline-block bg-primary text-dark font-bold px-6 py-2 rounded-lg shadow hover:bg-lime-200 transition-colors">Solicitar demo</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Precios/Planes */}
        <section id="precios" className="section-padding bg-dark">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              ¡Estás equivocado! <span className="text-white">Hicimos este producto pensando en ti...</span>
            </h2>
            <p className="text-white/80 text-lg mb-10">Habla con un vendedor y descubre el plan ideal para tu negocio.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Plan para tiendas de productos varios */}
              <motion.div
                className="rounded-2xl bg-[#18191c] shadow-xl p-8 flex flex-col items-start border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 #D0F60133' }}
              >
                <div className="text-primary font-bold text-lg mb-2">Plan para tiendas de productos varios</div>
                <div className="text-white/80 text-sm mb-4">No requiere bloqueo de dispositivos</div>
                <ul className="text-white/90 space-y-2 mb-6 text-left">
                  <li>🟢 Módulo de financiamiento</li>
                  <li>🟢 Soporte 24/7</li>
                  <li>🟢 Recibo electrónico de pagos</li>
                  <li>🟢 Panel multiusuario</li>
                  <li>🟢 Análisis de impago</li>
                  <li>🟢 Módulo de proveedores</li>
                  <li>🟢 Módulo de garantías</li>
                  <li>🟢 Módulo de reportes avanzados IA</li>
                </ul>
                <a href="#" className="inline-block bg-primary text-dark font-bold px-6 py-2 rounded-lg shadow hover:bg-lime-200 transition-colors">Conocer precio</a>
              </motion.div>
              {/* Plan para tiendas de Smartphone */}
              <motion.div
                className="rounded-2xl bg-[#18191c] shadow-xl p-8 flex flex-col items-start border border-primary/10 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 #D0F60133' }}
              >
                <div className="text-primary font-bold text-lg mb-2">Plan para tiendas de Smartphone</div>
                <div className="text-white/80 text-sm mb-4">Requiere bloqueo de dispositivos</div>
                <ul className="text-white/90 space-y-2 mb-6 text-left">
                  <li>🟢 Módulo de financiamiento</li>
                  <li>🟢 Control de inventario</li>
                  <li>🟢 Soporte 24/7</li>
                  <li>🟢 Recibo electrónico de pagos</li>
                  <li>🟢 Panel multiusuario</li>
                  <li>🟢 Análisis de impago</li>
                  <li>🟢 Módulo de proveedores</li>
                  <li>🟢 Módulo de garantías</li>
                  <li>🟢 Módulo de reportes avanzados IA</li>
                </ul>
                <a href="#" className="inline-block bg-primary text-dark font-bold px-6 py-2 rounded-lg shadow hover:bg-lime-200 transition-colors">Conocer precio</a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section (Formulario) */}
        <section id="cta" className="section-padding bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-lg mb-8 text-dark/80">
              Únete a la beta de Kipli y sé uno de los primeros en experimentar el futuro de la gestión empresarial
            </p>
            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Kipli</h3>
                <p className="text-gray-300 mb-4">
                  Automatiza tu negocio con las herramientas más avanzadas de gestión, 
                  cobranzas y marketing digital.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Producto</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Características</a></li>
                  <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Beneficios</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Precios</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Demo</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sobre nosotros</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carreras</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2024 Kipli. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Términos</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacidad</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 