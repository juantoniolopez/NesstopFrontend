import React, { useEffect, useState } from "react";
import { getCompanyQuery } from "../http/api";
import useQuery from "../shared/hooks/useQuery";
import "../css/SearchResult.css";
import { Link } from "react-router-dom";

function SearchResult() {
  const [companiesData, setCompaniesData] = useState([]);
  //   let query = [
  //     {
  //       name: "Apple",
  //       email: "apple@gmail.com",
  //       logo: "APPLELOGO",
  //       photos: "varias fotos",
  //     },
  //     {
  //       name: "Google",
  //       email: "Google@gmail.com",
  //       logo: "GOOGLELOGO",
  //       photos: "varias fotos",
  //     },
  //   ];
  let query = useQuery();

  const queryData = query.get("query");

  useEffect(() => {
    getCompanyQuery(queryData).then((data) => {
      //console.log(data);
      setCompaniesData(data);
    });
  }, []);

  //   const handleChange = (event) => {
  //     setCompaniesData({
  //       ...companiesData,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  //   if (companiesData.length > 0) {
  //     query = companiesData.filter((queryData) => {
  //       return company.name.match(companiesData);
  //     });
  //   }

  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         placeholder="Search COMPANY NAME HERE"
  //         onChange={handleChange}
  //         value={companiesData}
  //       />
  //       {companiesData.map((company, index) => {
  //         return (
  //           <div key={index}>
  //             <ul>
  //               <li>
  //                 {company.name}
  //                 {company.email}
  //                 {company.logo}
  //                 {company.photos}
  //               </li>
  //             </ul>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

  //   return (
  //     <>
  //       <div>
  //         {companiesData.map((company) => {
  //           return (
  //             <section className="section-results" key={company.id}>
  //               <div className="companies">
  //                 <p>{company?.city}</p>
  //                 <p>{company?.description}</p>
  //                 <p>{company?.id}</p>
  //                 <p>{company?.name}</p>
  //                 <p>{company?.email}</p>
  //                 <p>{company?.logo}</p>
  //                 <p>{company?.signup_date}</p>
  //               </div>
  //             </section>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="contenedor">
        {companiesData.map((company) => {
          return (
            <Link to={"/company/" + "?search=" + queryData}>
              <div className="card">
                <p>{company?.description}</p>
                <p>{company?.id}</p>
                <p>{company?.email}</p>
                <p>{company?.logo}</p>
                <p>{company?.signup_date}</p>

                <a href="/company/:id">{company?.name}</a>

                <p>{company?.city}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SearchResult;
