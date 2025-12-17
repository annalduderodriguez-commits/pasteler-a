import { useState } from "react";
import { useCart } from "./CartContext";
import BotonCarrito from "./BotonCarrito";

function CarritoFlotante() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.cantidad, 0);
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <>
      {/* Botón flotante */}
      <BotonCarrito onClick={() => setIsOpen(!isOpen)} />

      {/* Mini resumen de productos */}
      {isOpen && cart.length > 0 && (
        <div className="fixed bottom-24 right-6 w-80 max-h-96 overflow-y-auto bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-2xl p-5 z-50 border border-pink-200 animate-fadeIn">
          <h3 className="text-pink-600 font-extrabold text-xl mb-4 flex items-center gap-2">
            🛒 Tu carrito <span className="text-sm text-gray-400">({totalItems} items)</span>
          </h3>
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center mb-3 border-b border-pink-100 pb-2"
            >
              <div>
                <p className="font-semibold text-pink-700">{item.nombre}</p>
                <p className="text-gray-500 text-sm">
                  {item.cantidad} × S/ {item.precio.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.nombre)}
                className="text-xs text-red-500 font-medium hover:text-red-700 transition"
              >
                ✖ Quitar
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-pink-700 mt-4 text-lg">
            Total: <span className="text-pink-600">S/ {total.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Mensaje si está vacío */}
      {isOpen && cart.length === 0 && (
        <div className="fixed bottom-24 right-6 w-80 bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-2xl p-5 z-50 text-center text-gray-500 animate-fadeIn">
          <p className="text-lg">Tu carrito está vacío 😢</p>
        </div>
      )}
    </>
  );
}

export default CarritoFlotante;
