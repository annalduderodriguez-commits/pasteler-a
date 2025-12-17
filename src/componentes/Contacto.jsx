import { useState } from "react";

function Contacto() {
  const [comentarios, setComentarios] = useState([
    { nombre: "Ana", texto: "¡Me encantaron los postres!" },
    { nombre: "Luis", texto: "La atención fue un poco lenta." },
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleAgregarComentario = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim()) {
      setComentarios([
        { nombre: "Cliente", texto: nuevoComentario },
        ...comentarios,
      ]);
      setNuevoComentario("");
    }
  };

  const handleEnviarFormulario = (e) => {
    e.preventDefault();
    if (nombre.trim() && mensaje.trim()) {
      alert(`Gracias ${nombre}, tu mensaje ha sido enviado 💌`);
      setNombre("");
      setMensaje("");
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white scroll-mt-24">
      <h2 className="mt-16 text-4xl font-extrabold text-pink-500 mb-4 text-center tracking-tight">
        Contáctanos
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        ¿Quieres hacer un pedido especial o colaborar con nosotros?  
        Escríbenos, ¡nos encantará hablar contigo! 💕
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Formulario principal */}
        <form
          onSubmit={handleEnviarFormulario}
          className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-pink-100"
        >
          <h3 className="text-2xl font-semibold text-pink-600 mb-6">Envíanos un mensaje</h3>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-4 p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full mb-4 p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <textarea
            placeholder="Tu mensaje"
            rows="5"
            className="w-full mb-6 p-4 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-xl transition duration-200"
          >
            Enviar mensaje 💌
          </button>
        </form>

        {/* Comentarios */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">Comentarios de clientes</h3>
          <div className="flex-1 space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2">
            {comentarios.length === 0 ? (
              <p className="text-gray-500">Todavía no hay comentarios.</p>
            ) : (
              comentarios.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border bg-pink-50 border-pink-200 shadow-sm animate-fadeIn"
                >
                  <p className="font-semibold text-pink-700">{c.nombre}</p>
                  <p className="mt-1 text-gray-600">{c.texto}</p>
                </div>
              ))
            )}
          </div>

          {/* Añadir comentario */}
          <form onSubmit={handleAgregarComentario} className="flex gap-3">
            <input
              type="text"
              placeholder="Escribe un comentario..."
              className="flex-1 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
            />
            <button
              type="submit"
              className="px-5 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl font-medium transition duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
