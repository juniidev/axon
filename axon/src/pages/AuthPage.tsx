import { useState } from "react";
import { loginUser, registerUser } from "../services/auth";

export const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await loginUser(email, password);
  };

  const handleRegister = async () => {
    await registerUser(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="bg-neutral-900 p-6 rounded-2xl w-[320px] space-y-4">
        <h1 className="text-xl font-bold">Axon Login</h1>

        <input
          className="w-full p-2 rounded bg-neutral-800"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 rounded bg-neutral-800"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-2 rounded"
        >
          Login
        </button>

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
};