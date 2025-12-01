import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function iniciarSesion (){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // ...
            console.log("inicio de sesion exitoso");
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear cuenta");
            console.log(error);
        });
    }

    function iniciarConGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            // ...
            console.log("Iniciaste sesion con Google");
            navigate("/");
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("Error con iniciar con Google");
            console.log(error);            
        });
    }


    return(
        <div className="min-h-screen flex items-center justify-center bg-rose-50">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-rose-100">
        
        <h1 className="text-3xl font-semibold text-rose-600 text-center mb-8">
            Iniciar Sesión
        </h1>

        <input 
            type="email" 
            placeholder="correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg border border-rose-300 
                       bg-rose-50 text-rose-600 placeholder-rose-400
                       focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white"
        />

        <input 
            type="password" 
            placeholder="contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-lg border border-rose-300 
                       bg-rose-50 text-rose-600 placeholder-rose-400
                       focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white"
        />

        <button 
            onClick={iniciarSesion}
            className="w-full py-3 mb-4 bg-rose-500 text-white rounded-lg 
                       font-medium hover:bg-rose-600 transition"
        >
            Iniciar Sesión
        </button>

        <button 
            onClick={iniciarConGoogle}
            className="w-full py-3 border border-rose-300 text-rose-600 
                       rounded-lg font-medium hover:bg-rose-100 transition flex items-center justify-center gap-2"
        >
            <img src="/google-icon.png" className="w-5 h-5" />
            Ingresa con Google
        </button>
        
    </div>
</div>

    )
}
export default Login 