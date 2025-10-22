import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 🔹 Tus componentes originales
import Header from './componentes/header';
import Bienvenida from './componentes/bienvenida';
import SobreNosotros from './componentes/sobreNosotros';
import Catalogo from './componentes/catalogo';
import Contacto from './componentes/contacto';
import Footer from './componentes/footer';
import Carrito from './componentes/Carrito';
import { CartProvider } from './componentes/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/nosotros' element={<SobreNosotros />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/contacto' element={<Contacto />} />

          {/* Ruta del carrito */}
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;