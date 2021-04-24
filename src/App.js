// import logo from "./logo.svg";
// import CardUIUX from "./components/Card/CardUIUX";
// react hooks untuk membuat state
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import Avatar from "./components/Avatar/Avatar";
// import Card from "./components/Card/Card";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // to handle private route
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  // sesuatu didalam return disebut jsx
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route path="/register">
            {" "}
            <Register />{" "}
          </Route>
          <PrivateRoute path="/profile" auth={auth}>
            {" "}
            <Profile handleLogout={handleLogout} />{" "}
          </PrivateRoute>
          <Route path="/gallery">
            {" "}
            <Gallery />{" "}
          </Route>
          <Route path="/login">
            {" "}
            <Login handleLogin={handleLogin} />{" "}
          </Route>
          {/* put this route ALWAYS at the end to avoid useParams called first*/}
          <Route path="/:id">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/:id">
            {" "}
            <Contact />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
