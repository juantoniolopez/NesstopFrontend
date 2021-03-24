import {
  // useHistory,
  NavLink,
} from "react-router-dom";

export default function NavLoginUserCompany() {
  return (
    <>
      <section>
        <NavLink
          to="/Login"
          className="nav-item-user"
          activeClassName="selected"
        >
          User
        </NavLink>

        <NavLink
          to="/LoginCompany"
          className="nav-item-company"
          activeClassName="selected"
        >
          Company
        </NavLink>
      </section>
    </>
  );
}
