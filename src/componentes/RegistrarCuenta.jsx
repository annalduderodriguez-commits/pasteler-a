import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funcionar para crear un usuario
    const registrar = async() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Usuario registrado");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear tu cuenta");
            console.log(error);
        });
    }

    return(
   <div className="min-h-screen flex items-center justify-center bg-rose-50">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-rose-100">
        
        <h1 className="text-3xl font-semibold text-rose-600 text-center mb-8">
            Registrar Cuenta
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
            onClick={registrar}
            className="w-full py-3 bg-rose-500 text-white rounded-lg 
                       font-medium hover:bg-rose-600 transition"
        >
            Registrar
        </button>

    </div>
</div>

    )
}
export default RegistrarCuenta;