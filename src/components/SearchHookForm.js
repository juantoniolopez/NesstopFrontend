// import { useForm } from "react-hook-form";
// import "../css/SearchHookForm.css";

// export default function SearchHookForm() {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {};

//   return (
//     <form id="search" onSubmit={handleSubmit(onSubmit)}>
//       <input
//         id="inputsearch"
//         ref={register}
//         placeholder="Nombre o ciudad de la empresa"
//         name="companyname"
//       />

//       <input id="submitsearch" type="submit" value="Buscar" />
//     </form>
//   );
// }
import { useState } from "react";

// import { search } from "../http/api";
import CompanyList from "../components/CompanyList";
import SearchBoxHook from "./SearchBoxHook";

export default function SearchHookForm() {
  const [companies, setCompanies] = useState([]);

  const onSubmit = async (data) => {
    const companyData = await search(data.query);
    setCompanies(companyData.Search);
  };

  return (
    <>
      <SearchBoxHook onSubmit={onSubmit}></SearchBoxHook>

      <CompanyList companies={companies}></CompanyList>
    </>
  );
}
