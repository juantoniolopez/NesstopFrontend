import {
  // useHistory,
  NavLink,
} from "react-router-dom";

import "../css/NavLoginRegister.css";

export default function NavLoginRegister() {
  return (
    <>
      <section className="loginregister">
        <NavLink
          to="/login"
          className="nav-item-login"
          activeClassName="selected"
        >
          Login
        </NavLink>

        <NavLink
          to="/RegisterUser"
          className="nav-item-register"
          activeClassName="selected"
        >
          Regístrate
        </NavLink>
      </section>
    </>
  );
}
