import SearchHookForm from "../components/SearchHookForm";
// import Rodal from "rodal";
import "./Landing.css";
import "rodal/lib/rodal.css";
import ShowToLoggedInUser from "../components/ShowToLoggedInUser";
import ShowToAdminUser from "../components/ShowToAdminUser";

export default function Landing() {
  return (
    <>
      <div className="container">
        <h1>Landing Usuario Anónimo</h1>
        <SearchHookForm></SearchHookForm>
      </div>
      <ShowToLoggedInUser>
        <h2>Esto solo lo ve el usuario con sesión iniciada</h2>
      </ShowToLoggedInUser>

      <ShowToAdminUser>
        <h2>Esto solo lo ve el ADMIN</h2>
      </ShowToAdminUser>
    </>
  );
}
