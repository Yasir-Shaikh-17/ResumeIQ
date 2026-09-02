import React from "react";
import logo from "../../../assets/logo2.png";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { handleLogout, user } = useAuth();

  const logoutHandler = async (e) => {
    e.preventDefault();

    await handleLogout();

    navigate("/login", { replace: true });
  };

  return (
    <main>
      <div className="h-[10dvh] border-2 border-[var(--border-color)] flex justify-between items-center px-4 sm:px-8">
        <Link to={"/"} className="navLeft flex items-center gap-1 sm:gap-2">
          <img src={logo} alt="logo" className="h-12 md:h-16" />
          <h2 className="text-[var(--primary-color)] text-3xl md:text-4xl font-bold hidden sm:block">
            ResumeIQ
          </h2>
        </Link>

        {!user && (
          <nav className="flex gap-2 md:gap-6 items-center text-[var(--primary-color)] font-medium">
            <Link
              to={"/login"}
              className="bg-[var(--primary-color)] text-[var(--background-color)] px-4 py-1 flex justify-center items-center rounded-full cursor-pointer active:scale-95 transition duration-200 text-sm sm:text-base"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="bg-[var(--primary-color)] text-[var(--background-color)] px-4 py-1 flex justify-center items-center rounded-full cursor-pointer active:scale-95 transition duration-200 text-sm sm:text-base"
            >
              Sign up
            </Link>
          </nav>
        )}

        {user && (
          <nav>
            <button onClick={logoutHandler} className="bg-[var(--primary-color)] text-[var(--background-color)] px-4 py-1 rounded-full cursor-pointer active:scale-95 transition duration-200 text-sm sm:text-base">
              Logout
            </button>
          </nav>
        )}
      </div>
    </main>
  );
};

export default Navbar;
