import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const Protected = ({children}) => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <main className="h-full w-full flex justify-center items-center">
        <h1>Loading...</h1>
      </main>
    );
  }

  if(!user){
    return <Navigate to={"/login"} replace/>
  }

  return children
};

export default Protected;
