import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ContextProvide } from "./contexts/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvide>
            <RouterProvider router={router} />
        </ContextProvide>
    </StrictMode>
);
