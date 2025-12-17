function Lanzamiento() {
  return (
    <section className="bg-gradient-to-b from-pink-100 to-pink-200 py-12 px-6 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">
        🎉 ¡Lanzamiento Oficial!
      </h2>

      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        Somos un equipo apasionado que combina sabor, diseño y tecnología para
        ofrecer experiencias dulces inolvidables. 🍰✨
      </p>

      <img
        src="banner2.png"
        alt="Banner promocional pastelería"
        className="mx-auto rounded-lg shadow-md mb-8 w-full max-w-3xl"
      />

      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mb-8">
        <p className="text-gray-800 text-base leading-relaxed">
          📢 ¡Ya estamos en línea! Presentamos nuestro proyecto digital, resultado
          de meses de trabajo en equipo. 🚀 Conócenos y disfruta de nuestras
          creaciones dulces en el sitio web oficial.
        </p>
      </div>

      <a
        href="/contacto"
        className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        👉 Contáctanos
      </a>
    </section>
  );
}

export default Lanzamiento;
