import React from "react";
import ReactDOM from "react-dom/client";
import CountryContextProvider from "./CountryContextProvider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CountryContextProvider>
            <App />
        </CountryContextProvider>
    </React.StrictMode>
);
