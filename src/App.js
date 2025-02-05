import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "./components/Navbarcomp";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Auth0Provider
      domain="dev-bq5st8x3jsbzfven.us.auth0.com"
      clientId="N9NMRwpRzRSFAioJL7acIj3SmWrCaQ8K"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Router>
        <div className="app-container">
          <Navbarcomp />
          <Footer />
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;