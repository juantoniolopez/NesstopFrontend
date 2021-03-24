import React, { useState, useEffect } from "react";
import "./Landing.css";
import ShowToLoggedInUser from "../components/ShowToLoggedInUser";
import ShowToAdminUser from "../components/ShowToAdminUser";
import Search from "../components/Search";

const Landing = () => {
  // state de la  landing
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      if (search === "") return;

      const url = `http://localhost:4000/company/`;
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container">
        <h1>Landing Usuario Anónimo</h1>
        <Search setSearch={setSearch} />

        <ShowToLoggedInUser>
          <h2>Esto solo lo ve el usuario con sesión iniciada</h2>
          <p>esto es un parrafo de prueba</p>
        </ShowToLoggedInUser>

        <hr></hr>

        <ShowToAdminUser>
          <h2>Esto solo lo ve el ADMIN</h2>
          <p>parrafo que solo ve el admin de la app</p>
        </ShowToAdminUser>
      </div>
    </>
  );
};

export default Landing;
