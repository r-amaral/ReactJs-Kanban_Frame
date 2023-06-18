import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Routes/router";
import AuthProvider from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <Router />
        </AuthProvider>
    </React.StrictMode>
);
