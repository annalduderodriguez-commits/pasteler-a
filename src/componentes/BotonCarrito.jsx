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
        <div className="fixed bottom-20 right-6 w-72 max-h-96 overflow-y-auto bg-white rounded-xl shadow-lg p-4 z-50">
          <h3 className="text-pink-600 font-bold text-lg mb-2">🛒 Tu carrito</h3>
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center mb-2 border-b pb-2"
            >
              <div>
                <p className="font-semibold text-pink-600">{item.nombre}</p>
                <p className="text-gray-500 text-sm">
                  {item.cantidad} x S/ {item.precio.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.nombre)}
                className="text-red-500 text-sm hover:underline"
              >
                Quitar
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-pink-700 mt-2">
            Total: S/ {total.toFixed(2)}
          </div>
        </div>
      )}

      {/* Mensaje si está vacío */}
      {isOpen && cart.length === 0 && (
        <div className="fixed bottom-20 right-6 w-72 bg-white rounded-xl shadow-lg p-4 z-50 text-center text-gray-500">
          Tu carrito está vacío 😢
        </div>
      )}
    </>
  );
}

export default CarritoFlotante;
