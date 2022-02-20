import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";

import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
        <div>
          <header className="">
            <Nav/>
          </header>

          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/catalogo">
              <Catalogo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
