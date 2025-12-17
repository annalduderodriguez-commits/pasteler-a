// CartContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistencia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar (si existe, suma cantidad)
  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.nombre === product.nombre);
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], cantidad: next[idx].cantidad + 1 };
        return next;
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  // Decrementar una unidad (si cantidad llega a 0, remover)
  const decrementFromCart = (nombre) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.nombre === nombre);
      if (idx === -1) return prev;
      const item = prev[idx];
      if (item.cantidad <= 1) {
        return prev.filter((i) => i.nombre !== nombre);
      }
      const next = [...prev];
      next[idx] = { ...item, cantidad: item.cantidad - 1 };
      return next;
    });
  };

  // Remover ítem completo
  const removeFromCart = (nombre) => {
    setCart((prev) => prev.filter((item) => item.nombre !== nombre));
  };

  // Vaciar carrito
  const clearCart = () => setCart([]);

  // Totales listos
  const totals = useMemo(() => {
    const totalItems = cart.reduce((sum, i) => sum + i.cantidad, 0);
    const total = cart.reduce((sum, i) => sum + i.precio * i.cantidad, 0);
    return { totalItems, total };
  }, [cart]);

  const value = {
    cart,
    addToCart,
    decrementFromCart,
    removeFromCart,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
