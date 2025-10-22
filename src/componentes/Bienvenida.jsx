function Bienvenida() {
  return (
    <section id="home" className="container mx-auto mt-50 text-center py-12 px-4 scroll-mt-24">
      <h2 className="text-3xl font-semibold text-pink-600 mb-4">
        Bienvenid@ a nuestra pastelería
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        En <span className="text-pink-500 font-medium">Dulzura Pastel</span> creemos que los postres no solo son comida,
        sino una forma de compartir alegría. Aquí encontrarás colores suaves, sabores mágicos y un toque artesanal en cada creación.
      </p>
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        alt="pastelería"
        className="mt-8 mx-auto rounded-3xl shadow-md w-full max-w-3xl"
      />
    </section>
  );
}

export default Bienvenida;
