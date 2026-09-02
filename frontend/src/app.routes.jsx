import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Protected from "./features/auth/components/Protected"
import Interview from "./features/interview/pages/Interview"
import InterviewHome from "./features/interview/pages/InterviewHome"
import Home from "./pages/Home"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },

    {
        path:"/register",
        element: <Register />
    },

    {
        path: "/home",
        element: <Protected><InterviewHome /></Protected>
    },

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/interview/:interviewId",
        element: <Protected><Interview /></Protected>
    }
]) 