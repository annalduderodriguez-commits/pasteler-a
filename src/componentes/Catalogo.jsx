import { useCart } from "./CartContext";

function Catalogo() {
  const { addToCart } = useCart();

  const postres = [
    {
      nombre: "Cupcakes de Fresa",
      imagen: "https://bing.com/th?id=OSK.b7130e116074edd12ea0dfffd074fb24",
      precio: 5.0,
    },
    {
      nombre: "Macarons Rosados",
      imagen: "https://i.pinimg.com/originals/9c/be/8e/9cbe8e391ef82af8e6d6c41f9d82cc3f.jpg",
      precio: 5.0,
    },
    {
      nombre: "Tarta de Frambuesa",
      imagen: "https://miltartas.com/wp-content/uploads/tarta-frambuesas.jpg.webp",
      precio: 6.8,
    },
    {
      nombre: "Helado de Rosa",
      imagen: "https://tse3.mm.bing.net/th/id/OIP.L1iYRfk3_bgnsgF7tjXVqwAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      precio: 3.9,
    },
    {
      nombre: "Tiramisu",
      imagen: "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17-1024x1536.jpg",
      precio: 5.9,
    },
    {
      nombre: "Donas Glaseadas",
      imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      precio: 4.2,
    },
  ];

  return (
    <section id="catalogo" className="mt-25 bg-gradient-to-b from-pink-50 to-white py-20 scroll-mt-24">
      <h2 className="text-center text-4xl font-extrabold text-pink-600 mb-12">
        🍩 Nuestros Postres Favoritos 🍰
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {postres.map((p, i) => (
          <div
            key={i}
            className="group rounded-2xl shadow-lg bg-white  overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Imagen */}
            <div className="relative">
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 right-4 bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                S/ {p.precio.toFixed(2)}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-pink-600 mb-2">{p.nombre}</h3>
              <p className="text-gray-500 mb-4">Delicia artesanal hecha con amor 💖</p>
              <button
                onClick={() => addToCart(p)}
                className="inline-flex items-center gap-2 px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                🛒 Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
