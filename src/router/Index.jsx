import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import LayoutPage from "../pages/LayoutPage";
import App from "../App.jsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        mode: "absolute",
        children: [
            {
                path: "/", element: <Home />, children: [

                    { path: "/", element: <LayoutPage /> },


                ]
            },


        ],
    },
]);

export default router
