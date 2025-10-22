import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext"; // Asegúrate de la ruta correcta

function Header() {
  // 🛒 Hook para obtener el carrito
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-pink-100 shadow-md">
      {/* 🔹 Barra rosada de navegación */}
      <nav className="bg-pink-200 py-3 shadow-inner">
        <div className="container mx-auto flex justify-center space-x-8 text-pink-700 font-semibold">
          <Link to="/" className="hover:text-pink-900 transition-colors duration-200">
            Inicio
          </Link>
          <Link to="/nosotros" className="hover:text-pink-900 transition-colors duration-200">
            Nosotros
          </Link>
          <Link to="/catalogo" className="hover:text-pink-900 transition-colors duration-200">
            Catálogo
          </Link>
          <Link to="/contacto" className="hover:text-pink-900 transition-colors duration-200">
            Contacto
          </Link>

          {/* 🔹 Carrito con contador */}
          <Link
            to="/carrito"
            className="relative hover:text-pink-900 transition-colors duration-200"
          >
            🛒 Carrito
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* 🔹 Título y subtítulo animados */}
      <div className="text-center py-6 bg-pink-100">
        <motion.h1
          className="text-5xl font-extrabold text-pink-500 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🍰 Dulzura Pastel 🍓
        </motion.h1>

        <motion.p
          className="text-pink-400 mt-2 text-lg italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          “El lugar donde cada bocado es amor y color”
        </motion.p>
      </div>
    </header>
  );
}

export default Header;