import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Bienvenida from './componentes/Bienvenida'
import SobreNosotros from './componentes/sobreNosotros';
import Catalogo from './componentes/Catalogo'
import Contacto from './componentes/Contacto'
import Footer from './componentes/Footer'
import Carrito from './componentes/Carrito';
import { CartProvider } from './componentes/CartContext';
import RegistrarCuenta from './componentes/RegistrarCuenta';
import RutaPrivada from './componentes/RutaPrivada';
import Login from './componentes/Login';

function App() {
  // Estado para abrir/cerrar el carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/nosotros' element={<SobreNosotros />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/registrar' element={<RegistrarCuenta />} />
          <Route path='/ingresar' element={<Login />} />
          <Route
            path='/carrito'
            element={
              <RutaPrivada>
                <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              </RutaPrivada>
            }
            
          />
        </Routes>

        {/* Botón para abrir el carrito */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          🛒 Abrir Carrito
        </button>

        {/* Carrito flotante */}
        <Carrito isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
