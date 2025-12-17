import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './componentes/Header';
import Bienvenida from './componentes/Bienvenida';
import SobreNosotros from './componentes/sobreNosotros';
import Catalogo from './componentes/Catalogo';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import Carrito from './componentes/Carrito';
import { CartProvider } from './componentes/CartContext';
import RegistrarCuenta from './componentes/RegistrarCuenta';
import RutaPrivada from './componentes/RutaPrivada';
import Login from './componentes/Login';
import Lanzamiento from './componentes/Lanzamiento';
import Comunidad from './componentes/Comunidad';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col`}>
          
          {/* Header */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Botón Dark / Light */}
          <div className="text-right p-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition"
            >
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div>

          {/* Rutas */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Bienvenida />
                  <Lanzamiento />
                </>
              } />

              <Route path="/nosotros" element={<SobreNosotros />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/registrar" element={<RegistrarCuenta />} />
              <Route path="/ingresar" element={<Login />} />
              <Route path="/comunidad" element={<Comunidad />} />

              <Route
                path="/carrito"
                element={
                  <RutaPrivada>
                    <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                  </RutaPrivada>
                }
              />
            </Routes>
          </main>

          {/* Botón flotante carrito */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-pink-400 hover:bg-pink-500 text-white text-2xl p-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            🛒
          </button>

          {/* Carrito lateral */}
          <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
