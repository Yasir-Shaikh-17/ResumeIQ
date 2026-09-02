import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { InterviewProvider } from "./features/interview/interview.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <InterviewProvider>
        <div className="bg-[--background-color] text-white h-screen">
          <RouterProvider router={router} />
        </div>
      </InterviewProvider>
    </AuthProvider>
  );
};

export default App;
