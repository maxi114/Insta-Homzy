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
        redirect_uri: "https://homzy2-eight.vercel.app/",
      }}
      audience="https://homzy-server.vercel.app/"
      scope = "openid profile email"
    >
      <App />
    </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);
