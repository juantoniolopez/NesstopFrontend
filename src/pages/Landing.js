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
      </div>
      <ShowToLoggedInUser>
        <h2>Esto solo lo ve el usuario con sesión iniciada</h2>
      </ShowToLoggedInUser>

      <ShowToAdminUser>
        <h2>Esto solo lo ve el ADMIN</h2>
      </ShowToAdminUser>
    </>
  );
};

export default Landing;
