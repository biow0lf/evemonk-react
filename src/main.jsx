import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./bootstrap.css";
import "./index.css";

import Welcome from "./Welcome.jsx";
import UniverseAlliance from "./UniverseAlliance.jsx";
import Faq from "./Faq.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import TermsOfService from "./TermsOfService.jsx";
import About from "./About.jsx";

import GRAPHQL_URL from "./consts.js";

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/universe/alliances/:id"
            element={<UniverseAlliance />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_of_service" element={<TermsOfService />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
