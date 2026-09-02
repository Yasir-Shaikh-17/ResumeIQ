import React from "react";
import { useAuth } from "../../auth/hooks/useAuth";

const NavbarSkeleton = () => {
  const { user } = useAuth();

  return (
    <main className="animate-pulse">
      <div className="h-[10dvh] border-2 border-[var(--border-color)] flex justify-between items-center px-4 sm:px-8 bg-gray-400">
        <div className="navLeft flex items-center gap-1 sm:gap-2 h-8 w-1/4 bg-gray-300 rounded"></div>

        {!user && (
          <nav className="flex gap-2 md:gap-6 items-center text-[var(--primary-color)] font-medium w-1/4">
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
          </nav>
        )}

        {user && (
          <nav className="w-1/4 flex justify-center items-center">
            <button className="w-1/2 h-4 bg-gray-300 rounded"></button>
          </nav>
        )}
      </div>
    </main>
  );
};

export default NavbarSkeleton;
