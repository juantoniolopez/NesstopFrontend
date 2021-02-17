import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getCompanyDetail } from "../http/api";
import CompanyThumbnail from "../components/CompanyThumbnail";

export default function CompanyUA() {
  const params = useParams();
  const [company, setCompany] = useState();
  useEffect(() => {
    const getCompanyData = async () => {
      const companyInfo = await getCompanyDetail(params.id);
      setCompany(companyInfo);
    };
    executeRequest();
  }, []);
  return (
    <>
      <Link to="/search"> aqui va la flecha de volver</Link>
      {company && <CompanyThumbnail company={company}></CompanyThumbnail>}
      <h1>Detalle empresa seleccionada</h1>
    </>
  );
}
