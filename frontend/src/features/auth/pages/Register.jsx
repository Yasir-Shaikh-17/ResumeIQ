import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister({ username, email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <main className="h-full w-full flex justify-center items-center">
        <h1 className="text-[#ededed] text-5xl font-bold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="h-svh w-full flex justify-center items-center p-4">
      <div className="form-container py-5 px-4 rounded-xl flex flex-col gap-6 w-full sm:w-1/2 xl:w-1/3 border-2 
      border-[var(--border-color)] items-center shadow-xl">
        <h1 className="text-5xl uppercase font-bold text-center text-[var(--primary-color)]">Sign up</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 w-full"
        >
          <div className="input-group flex flex-col gap-1 w-full">
            <label htmlFor="username" className="text-lg">
              Username
            </label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className="px-2 py-2 rounded outline-0 text-[var(--text-color)] border border-[var(--border-color)] shadow-lg"
            />
          </div>

          <div className="input-group flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded outline-0 text-[var(--text-color)] border border-[var(--border-color)] shadow-lg"
            />
          </div>

          <div className="input-group flex flex-col gap-1 w-full">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="px-2 py-2 rounded outline-0 text-[var(--text-color)] border border-[var(--border-color)] shadow-lg"
            />
          </div>

          <button className="bg-[var(--primary-color)] text-[#ededed] px-2 py-3 w-2/4 rounded-lg cursor-pointer active:scale-95 font-semibold transition-all duration-200">
            Register
          </button>
        </form>

        <p className="text-lg text-[var(--text-color)]">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[var(--primary-color)] font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
