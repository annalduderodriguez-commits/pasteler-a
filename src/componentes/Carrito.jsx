import { useCart } from "./CartContext";
import { useState } from "react";

function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [comprobante, setComprobante] = useState(null);
  const total = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <section className="mt-50 p-6 max-w-3xl mx-auto bg-pink-50 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
        🛍️ Tu Carrito
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío 😢</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white rounded-xl p-4 mb-3 shadow-sm"
            >
              <div>
                <h3 className="text-pink-600 font-semibold">{item.nombre}</h3>
                <p>
                  S/ {item.precio.toFixed(2)} x {item.cantidad}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.nombre)}
                className="text-sm text-red-500 hover:underline"
              >
                Quitar
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-pink-700 text-xl mt-4">
            Total: S/ {total.toFixed(2)}
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl">
            <h3 className="text-lg font-semibold text-pink-600 mb-2">
              💰 Métodos de pago
            </h3>
            <p>Escanea el QR o transfiere al siguiente número:</p>
            <p className="font-bold mt-2">📱 Yape / Plin: 987 534 517</p>

            <p className="text-sm text-gray-500 mt-1">
              (Agrega tu nombre en el mensaje de pago)
            </p>

            <div className="mt-4">
              <label className="block mb-2 text-gray-700 font-medium">
                📸 Subir comprobante:
              </label>
              <input
                type="file"
                onChange={(e) => setComprobante(e.target.files[0])}
                className="border p-2 rounded-lg w-full"
              />
            </div>
          </div>

          <button
            onClick={() => {
              clearCart();
              alert("✅ Pedido enviado con éxito. ¡Gracias por tu compra!");
            }}
            className="mt-6 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl"
          >
            Confirmar Pedido
          </button>
        </>
      )}
    </section>
  );
}

export default Carrito;