import { useState } from "react";

function Contacto() {
  // Comentarios iniciales de ejemplo (puedes dejar vacío si quieres)
  const [comentarios, setComentarios] = useState([
    { nombre: "Ana", texto: "¡Me encantaron los postres!" },
    { nombre: "Luis", texto: "La atención fue un poco lenta." },
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Enviar comentario desde la bandeja de comentarios
  const handleAgregarComentario = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim()) {
      setComentarios([{ nombre: "Cliente", texto: nuevoComentario }, ...comentarios]);
      setNuevoComentario("");
    }
  };

  // Enviar mensaje desde formulario principal
  const handleEnviarFormulario = (e) => {
    e.preventDefault();
    if (nombre.trim() && mensaje.trim()) {
      alert(`Gracias ${nombre}, tu mensaje ha sido enviado 💌`);
      setNombre("");
      setMensaje("");
    }
  };

  return (
    <section id="contacto" className="py-16 bg-white px-6 scroll-mt-24">
      <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
        Contáctanos
      </h2>
      <p className="mt-25 max-w-2xl mx-auto mb-10 text-gray-500 text-center">
        ¿Quieres hacer un pedido especial o colaborar con nosotros?  
        Escríbenos, ¡nos encantará hablar contigo! 💕
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* 🔹 Formulario principal a la izquierda */}
        <form
          className="flex-1 bg-pink-50 rounded-2xl p-6 shadow"
          onSubmit={handleEnviarFormulario}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full mb-3 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full mb-3 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <textarea
            placeholder="Tu mensaje"
            rows="4"
            className="w-full mb-4 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl transition"
          >
            Enviar 💌
          </button>
        </form>

        {/* 🔹 Comentarios a la derecha */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-pink-600 mb-4">Comentarios</h3>
          <div className="flex-1 space-y-4 max-h-[400px] overflow-y-auto mb-4">
            {comentarios.length === 0 ? (
              <p className="text-gray-500">Todavía no hay comentarios.</p>
            ) : (
              comentarios.map((c, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border bg-pink-50 border-pink-200"
                >
                  <p className="font-semibold">{c.nombre}</p>
                  <p className="mt-1 text-gray-600">{c.texto}</p>
                </div>
              ))
            )}
          </div>

          {/* 🔹 Formulario pequeño para añadir comentario */}
          <form
            onSubmit={handleAgregarComentario}
            className="mt-auto flex gap-2"
          >
            <input
              type="text"
              placeholder="Escribe un comentario..."
              className="flex-1 p-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-xl transition"
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