"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Usuario: ", username);
    console.log("Contraseña: ", password);

    try {
      const response = await fetch(
        "http://localhost:4000/login-authentication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta del servidor: ", data);
        router.push("/dashboard");
      } else {
        const data = await response.json();
        console.log("Error en la solicitud: ", data);
        setErrorLogin(data.message);
        setPassword("");
      }
    } catch (error) {
      console.log("Error en la solicitud: ", error);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center [&>section]:border [&>section]:border-gray-400">
      <section className="flex flex-col justify-center mt-6 items-center p-4">
        <div className="mb-4">
          <h1 className="text-4xl ">Mensajería A&B</h1>
        </div>
        <form
          className="flex flex-col gap-2 [&>input]:border border-gray-300 [&>input]:p-2 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorLogin && <p className="text-red-500">{errorLogin}</p>}
          <button
            type="submit"
            className="bg-black text-white text-2xl rounded-md"
          >
            Iniciar Sesion
          </button>
        </form>
        <br />
        <a href="">¿Olvidaste tu contraseña?</a>
      </section>
      <br />
      <section className="px-10 py-2">
        <span>
          <p>
            ¿No tienes cuenta?{" "}
            <a href="" className="text-blue-500 font-semibold">
              Registrate
            </a>
          </p>
        </span>
      </section>
    </main>
  );
};

export default Login;
