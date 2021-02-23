import "./Landing.css";
import ShowToLoggedInUser from "../components/ShowToLoggedInUser";
import ShowToAdminUser from "../components/ShowToAdminUser";
import SearchResult from "../components/SearchResult";

export default function Landing() {
  return (
    <>
      <div className="container">
        <h1>Landing Usuario Anónimo</h1>
        <SearchResult></SearchResult>
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
