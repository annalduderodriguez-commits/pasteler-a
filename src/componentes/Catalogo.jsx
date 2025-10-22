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
      nombre: "Tiramisu ",
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
    <section id="catalogo" className="bg-white py-16 scroll-mt-24">
      <h2 className="text-center text-3xl font-bold text-pink-500 mb-10">
        Nuestros Postres Favoritos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {postres.map((p, i) => (
          <div
            key={i}
            className="bg-pink-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={p.imagen}
              alt={p.nombre}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-pink-600">{p.nombre}</h3>
              <p className="text-gray-500">S/ {p.precio.toFixed(2)}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl transition"
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