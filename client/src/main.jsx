import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from '@mantine/core';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider >
    <Auth0Provider
      domain="dev-f3olnqmxief3koua.us.auth0.com"
      clientId="km400Rnjp4wa2jUhwenqpSg0d1OmWwH7"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="https://vercel.com/maxs-projects-3b80ac42/homzy-server"
      scope = "openid profile email"
    >
      <App />
    </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
