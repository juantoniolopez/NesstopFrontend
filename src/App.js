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
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import LoginCompany from "./pages/LoginCompany";
import RegisterUser from "./pages/RegisterUser";
import ListCompaniesUA from "./pages/ListCompaniesUA";
import { AuthProvider } from "./shared/context/authContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Admin from "./pages/Admin";
import AdminRoute from "./components/AdminRoute";
import RegisterCompany from "./pages/RegisterCompany";
import EditUser from "./pages/EditUser";
// import EditCompany from "./pages/EditCompany";
// import CompanyUR from "./pages/CompanyUR";
import CompanyUA from "./pages/CompanyUA";
// import Evaluation from "./pages/Evaluation";

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
          
          <Route path="/Evaluation">
            <Evaluation />
          </Route>
        
          <Route path="/EditCompany">
            <EditCompany />
          </Route>

          <Route path="/companyUR">
            <CompanyUR />
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

      <AuthProvider>
        <div id="container">
          <Header></Header>

          <div id="main-content">
            <Switch>
              <Route path="/EditUser">
                <PrivateRoute>
                  <EditUser />
                </PrivateRoute>
              </Route>

              <Route path="/companyua">
                <CompanyUA />
              </Route>

              <Route path="/listcompaniesua">
                <ListCompaniesUA />
              </Route>

              <Route path="/RegisterCompany">
                <PublicRoute>
                  <RegisterCompany />
                </PublicRoute>
              </Route>

              <Route path="/RegisterUser">
                <PublicRoute>
                  <RegisterUser />
                </PublicRoute>
              </Route>

              <Route path="/login">
                <PublicRoute>
                  <Login></Login>
                </PublicRoute>
              </Route>

              <Route path="/logincompany">
                <PublicRoute>
                  <LoginCompany></LoginCompany>
                </PublicRoute>
              </Route>

              <Route path="/admin">
                <AdminRoute>
                  <Admin></Admin>
                </AdminRoute>
              </Route>

              <Route path="/home">
                <Landing></Landing>
              </Route>

              <Route path="/">
                Raiz
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </div>

          <Footer></Footer>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
