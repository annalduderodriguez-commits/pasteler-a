import { useCart } from "./CartContext";
import { useState } from "react";

function Carrito({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();
  const [comprobante, setComprobante] = useState(null);
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <section
      className={`fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-pink-50 to-white shadow-2xl border-l border-pink-200 
                  p-6 z-50 overflow-y-auto transition-transform duration-500 ease-in-out
                  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-pink-600 text-2xl font-bold hover:text-pink-800 transition"
      >
        ✕
      </button>

      {/* Título */}
      <h2 className="text-2xl font-extrabold text-pink-600 mb-6 text-center drop-shadow-sm">
        🛍️ Tu Carrito
      </h2>

      {/* Carrito vacío */}
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 italic">Tu carrito está vacío 😢</p>
      ) : (
        <>
          {/* Lista de productos */}
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-pink-100 rounded-xl p-4 mb-3 shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="text-pink-700 font-semibold">{item.nombre}</h3>
                <p className="text-gray-600 text-sm">
                  S/ {item.precio.toFixed(2)} × {item.cantidad}
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

          {/* Total */}
          <div className="text-right font-bold text-pink-700 text-xl mt-4">
            Total: <span className="text-pink-600">S/ {total.toFixed(2)}</span>
          </div>

          {/* Métodos de pago */}
          <div className="mt-6 p-4 bg-pink-100 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              💰 Métodos de pago
            </h3>
            <p className="text-gray-700">Escanea el QR o transfiere al siguiente número:</p>
            <p className="font-bold mt-2 text-pink-700">📱 Yape / Plin: 987 534 517</p>

            <div className="mt-4">
              <label className="block mb-2 text-gray-700 font-medium">
                📸 Subir comprobante:
              </label>
              <input
                type="file"
                onChange={(e) => setComprobante(e.target.files[0])}
                className="border border-pink-300 p-2 rounded-lg w-full focus:ring-2 focus:ring-pink-400 outline-none"
              />
              {comprobante && (
                <p className="mt-2 text-sm text-green-600">
                  ✅ {comprobante.name} cargado
                </p>
              )}
            </div>
          </div>

          {/* Botón confirmar */}
          <button
            onClick={() => {
              clearCart();
              alert("Compra realizada 🎉");
            }}
            className="mt-6 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl shadow-md transition transform hover:scale-105"
          >
            Confirmar Pedido
          </button>
        </>
      )}
    </section>
  );
}

export default Carrito;
