import { Link, NavLink } from "react-router-dom";
import "../css/Header.css";
import LogOut from "./LogOut";

function Header() {
  return (
    <nav>
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
      <LogOut></LogOut>
    </nav>
  );
}

export default Header;
