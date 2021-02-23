import React, { useEffect, useState } from "react";
import { getCompanies } from "../http/api";

export default function SearchResult() {
  const [companiesData, setCompaniesData] = useState([]);

  useEffect(() => {
    getCompanies().then((data) => {
      console.log(data);
      setCompaniesData(data);
    });
  }, []);

  console.log(companiesData);

  return (
    <div>
      {companiesData.map((company) => {
        return (
          <section className="section-results" key={company.id}>
            <div>
              <p>{company?.name}</p>
              <p>{company?.email}</p>
              <p>{company?.logo}</p>
              <p>{company?.photos.photo}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
