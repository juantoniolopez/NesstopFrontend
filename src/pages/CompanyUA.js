// import { useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useState } from "react";
// import { getCompanyDetail } from "../http/api";

// export default function CompanyUA() {
//   const params = useParams();
//   const [company, setCompany] = useState();
//   useEffect(() => {
//     const getCompanyDetail = async () => {
//       const companyInfo = await getCompanyDetail(params.id);
//       setCompany(companyInfo);
//     };
//     executeRequest();
//   }, []);
//   return (
//     <>
//       <Link to="/search"> aqui va la flecha de volver</Link>
//       {company && <CompanyThumbnail company={company}></CompanyThumbnail>}
//       <h1>Detalle empresa seleccionada</h1>
//     </>
//   );
// }

import React from "react";
import { useState, useEffect } from "react";
import { getCompanyDetail } from "../http/api";
import { Link, useParams } from "react-router-dom";

function CompanyUA() {
  const [companiesData, setCompaniesData] = useState([]);
  let { company_id } = useParams();

  useEffect(() => {
    getCompanyDetail(company_id).then((data) => {
      setCompaniesData(data);
    });
  }, [company_id]);
  console.log(companiesData);

  return (
    <div>
      <Link to={"/company" + companiesData.company_id}></Link>
      <div></div>
    </div>
  );
}

export default CompanyUA;
