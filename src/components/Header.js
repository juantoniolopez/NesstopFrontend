import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";

import LogOut from "./LogOut";
import PublicRoute from "./PublicRoute";

import ShowToLoggedInUser from "./ShowToLoggedInUser";

function Header() {
  return (
    <>
      <div className="header">
        <nav>
          <div className="logo">
            <Link to="/home">
              <img src="logohorizontal.png" alt="Logo de la empresa"></img>
            </Link>
          </div>
          <div className="loginandout">
            <div className="login">
              <PublicRoute>
                <NavLink to="/login" activeClassName="selected">
                  <img src="login.png" alt="Imagen de login"></img>
                </NavLink>
              </PublicRoute>
            </div>
            <div className="logout">
              <ShowToLoggedInUser>
                <LogOut></LogOut>
              </ShowToLoggedInUser>
            </div>
          </div>
        </nav>

        <div className="back">
          <NavLink to="/">
            <img src="back.png" alt="Flecha volver"></img>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
