import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import UserPageLayout from "../layout/user-layout";
import Cart from "../pages/cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserPageLayout />,
        children: [
            {
                path: 'home',
                element: <Home />
            }
        ]
    },
    {
        path: "/cart",
        element: <Cart />
    }
]);