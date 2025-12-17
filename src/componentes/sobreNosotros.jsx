function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="mt-10 py-20 bg-gradient-to-b from-pink-100 via-pink-50 to-white text-center px-6 scroll-mt-24"
    >
      {/* Título principal */}
      <h2 className="text-4xl font-extrabold text-pink-600 mb-8">
        Sobre Nosotros
      </h2>

      {/* Descripción inicial */}
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg mb-12">
        Somos una pequeña pastelería artesanal dedicada a crear postres con amor,
        color y mucha dulzura. Inspirados en el estilo europeo y los sabores
        latinoamericanos, cada producto es una experiencia única hecha con
        ingredientes frescos y naturales 🌸. Nuestro compromiso es ofrecer
        momentos inolvidables a través de cada bocado.
      </p>

      {/* Sección de valores */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-pink-500 mb-4">✨ Calidad</h3>
          <p className="text-gray-600">
            Utilizamos ingredientes frescos y seleccionados cuidadosamente para
            garantizar un sabor auténtico y delicioso en cada creación.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-pink-500 mb-4">💖 Pasión</h3>
          <p className="text-gray-600">
            Cada postre refleja nuestra dedicación y amor por la repostería,
            transmitiendo alegría y dulzura en cada detalle.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-pink-500 mb-4">🌍 Innovación</h3>
          <p className="text-gray-600">
            Combinamos técnicas tradicionales con un enfoque moderno, creando
            experiencias únicas que sorprenden a nuestros clientes.
          </p>
        </div>
      </div>

      {/* Imagen destacada */}
      <img
        src="/equipopasteleria.png"
        alt="Nuestro equipo de pastelería"
        className="mx-auto rounded-lg shadow-md mb-12 w-full max-w-4xl"
      />

      {/* Historia */}
      <div className="max-w-4xl mx-auto text-left bg-white shadow-md rounded-lg p-8">
        <h3 className="text-2xl font-bold text-pink-600 mb-4">Nuestra Historia 📖</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Nacimos de un pequeño sueño compartido entre amigos que encontraron 
          en la repostería una forma de expresar amor y creatividad. 
          Con dedicación y constancia, ese sueño floreció en una pastelería 
          donde la tradición se une con la innovación para dar vida a sabores únicos. 
          Cada pastel, galleta y postre es más que una receta: es el resultado de aprendizajes, 
          pasión y el deseo de endulzar la vida de quienes nos eligen.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nuestro propósito va más allá de hornear delicias; 
          queremos ser parte de tus celebraciones, acompañar tus momentos especiales 
          y convertirnos en un recuerdo inolvidable dentro de tu historia más dulce.
        </p>
      </div>
    </section>
  );
}

export default SobreNosotros;
