import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Search() {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push(`/listcompaniesua?query=${data.query}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre o ciudad de la empresa"
          name="query"
          ref={register({ required: true })}
        ></input>
        {errors?.query?.type === "required" && (
          <p className="error">debe introducir algo</p>
        )}

        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import Error from "./Error";

// const Search = ({ setSearch }) => {
//   const [company, setCompany] = useState("");
//   const [error, setError] = useState(false);

//   const searchCompanies = (e) => {
//     e.preventDefault();

//     // validar

//     if (company.trim() === "") {
//       setError(true);
//       return;
//     }
//     setError(false);

//     // enviar el termino de busqueda hacia el componente principal

//     setSearch(company);
//   };

//   return (
//     <form onSubmit={searchCompanies}>
//       <div className="row">
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder=" Business name or city "
//             onChange={(e) => setCompany(e.target.value)}
//           />
//         </div>
//         <div className="form-group2">
//           <input type="submit" className="boton" value="Search" />
//         </div>
//       </div>

//       {error ? <Error message="Agrega algo para buscar" /> : null}
//     </form>
//   );
// };

// export default Search;
