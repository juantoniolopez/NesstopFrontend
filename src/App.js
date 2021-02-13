import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
  Redirect,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingUA from "./pages/LandingUA";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import ListCompaniesUA from "./pages/ListCompaniesUA";

// import EditCompany from "./pages/EditCompany";
// import CompanyUR from "./pages/CompanyUR";
// import CompanyUA from "./pages/CompanyUA";
// import EditUser from "./pages/EditUser";
// import Evaluation from "./pages/Evaluation";
// import ListCompaniesUR from "./pages/ListCompaniesUR";
// import RegisterCompany from "./pages/RegisterCompany";

function App() {
  return (
    <Router>
      {/* <div className="">
        <div className="header">
          <Link to="/" className="logo">
            <img src="logohorizontal.png" alt="Logo de la empresa"></img>
          </Link>
          <Link to="/login" className="login">
            <img src="login.png" alt="Imagen de login"></img>
          </Link>
        </div>
        <Link to="/listCompaniesUA" className=""></Link>
        <Switch>
          

          <Route path="/RegisterCompany">
            <RegisterCompany />
          </Route>

          <Route path="/ListCompaniesUR">
            <ListCompaniesUR />
          </Route>

          <Route path="/Evaluation">
            <Evaluation />
          </Route>

          <Route path="/EditUser">
            <EditUser />
          </Route>

          <Route path="/EditCompany">
            <EditCompany />
          </Route>

          <Route path="/companyUR">
            <CompanyUR />
          </Route>

          <Route path="/companyUA">
            <CompanyUA />
          </Route>

          

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            Aqui va la pagina de inicio
            <LandingUA />
          </Route>
        </Switch>
      </div> */}

      {/* <nav>
        <div className="back">
          <NavLink to="/">
            <img src="back.png" alt="Flecha volver"></img>
          </NavLink>
        </div>
        <div>
          <Link to="/home">
            <img src="logohorizontal.png" alt="Logo de la empresa"></img>
          </Link>
        </div>
        <div>
          <NavLink to="/login" activeClassName="selected">
            <img src="login.png" alt="Imagen de login"></img>
          </NavLink>
        </div>
      </nav> */}
      <div id="container">
        <Header></Header>
        <div id="main-content">
          <Switch>
            <Route path="/listcompaniesUA">
              <ListCompaniesUA />
            </Route>

            <Route path="/RegisterUser">
              <RegisterUser />
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/home">
              <LandingUA></LandingUA>
            </Route>

            <Route path="/">
              Raiz
              <Redirect to="/home"></Redirect>
            </Route>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
