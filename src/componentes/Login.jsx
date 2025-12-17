import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // estado para errores
  const [loading, setLoading] = useState(false); // estado para mostrar cargando

  const navigate = useNavigate();

  function validarFormulario() {
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    // Validación básica de email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setError("Por favor ingresa un correo válido");
      return false;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    setError("");
    return true;
  }

  function iniciarSesion() {
    if (!validarFormulario()) return;

    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Inicio de sesión exitoso");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error al iniciar sesión", error);
        setError("Correo o contraseña incorrectos");
      })
      .finally(() => setLoading(false));
  }

  function iniciarConGoogle() {
    setLoading(true);
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Iniciaste sesión con Google");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error con iniciar con Google", error);
        setError("No se pudo iniciar sesión con Google");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-rose-100">
        <h1 className="text-3xl font-semibold text-rose-600 text-center mb-8">
          Iniciar Sesión
        </h1>

        {/* Mensaje de error */}
        {error && (
          <p className="mb-4 text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-rose-300 
                     bg-rose-50 text-rose-600 placeholder-rose-400
                     focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg border border-rose-300 
                     bg-rose-50 text-rose-600 placeholder-rose-400
                     focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white"
        />

        <button
          onClick={iniciarSesion}
          disabled={loading}
          className="w-full py-3 mb-4 bg-rose-500 text-white rounded-lg 
                     font-medium hover:bg-rose-600 transition disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>

        <button
          onClick={iniciarConGoogle}
          disabled={loading}
          className="w-full py-3 border border-rose-300 text-rose-600 
                     rounded-lg font-medium hover:bg-rose-100 transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <img src="/google.jpg" className="w-5 h-5" alt="Google" />
          {loading ? "Cargando..." : "Ingresa con Google"}
        </button>
      </div>
    </div>
  );
}

export default Login;
