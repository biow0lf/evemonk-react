import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap.css'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";
import Welcome from './Welcome.jsx'
import UniverseAlliance from './UniverseAlliance.jsx';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import GRAPHQL_URL from './consts.js'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/universe/alliances/:id" element={<UniverseAlliance />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
)
