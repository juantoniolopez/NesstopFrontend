import {
  // useHistory,
  NavLink,
} from "react-router-dom";

import "../css/NavRegisterUserCompany.css";

export default function NavRegisterUserCompany() {
  return (
    <>
      <section>
        <NavLink
          to="/RegisterUser"
          className="nav-item-user"
          activeClassName="selected"
        >
          User
        </NavLink>

        <NavLink
          to="/RegisterCompany"
          className="nav-item-company"
          activeClassName="selected"
        >
          Company
        </NavLink>
      </section>
    </>
  );
}
