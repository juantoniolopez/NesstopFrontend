import React, { useEffect, useState } from "react";
import { getCompanyQuery } from "../http/api";
import useQuery from "../shared/hooks/useQuery";
import "../css/SearchResult.css";
import { Link } from "react-router-dom";

function SearchResult() {
  const [companiesData, setCompaniesData] = useState([]);

  let query = useQuery();

  const queryData = query.get("query");

  useEffect(() => {
    getCompanyQuery(queryData).then((data) => {
      //console.log(data);
      setCompaniesData(data);
    });
  }, [queryData]);

  return (
    <>
      <div className="contenedor">
        {companiesData.map((company) => {
          return (
            <Link to={"/company/?search=" + queryData}>
              <div className="card">
                <p>{company?.description}</p>
                <p>{company?.id}</p>
                <p>{company?.email}</p>
                <p>{company?.logo}</p>

                <p>{company?.city}</p>
                <a href="/companyua">{company?.name}</a>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SearchResult;
