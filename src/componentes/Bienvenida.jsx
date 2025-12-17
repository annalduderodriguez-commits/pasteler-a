function Bienvenida() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center scroll-mt-24"
    >
      {/* FONDO OSCURO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* OVERLAY OSCURO + DEGRADADO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* CONTENIDO */}
      <div className="relative z-10 container mx-auto text-center px-6 py-16 text-white">
        <h2 className="mt-25 text-4xl md:text-5xl font-bold text-pink-400 mb-6 transition-all duration-700 hover:scale-105">
          Bienvenid@ a nuestra pastelería
        </h2>

        <p className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed mb-10">
          En{" "}
          <span className="text-pink-300 font-semibold">
            Dulzura Pastel
          </span>{" "}
          creemos que los postres no solo son comida, sino una forma de compartir
          alegría. Aquí encontrarás colores suaves, sabores mágicos y un toque
          artesanal en cada creación.
        </p>

        {/* IMAGEN DESTACADA */}
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          alt="pastelería"
          className="mx-auto rounded-3xl shadow-2xl w-full max-w-3xl 
                     transition duration-700 hover:scale-105 hover:shadow-pink-500/40"
        />
      </div>
    </section>
  )
}

export default Bienvenida
