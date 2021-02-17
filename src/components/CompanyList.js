// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function List() {
//   const [company, setCompany] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch("http://localhost:4000/company/");
//     const companies = await data.json();
//     setCompany(companies);
//   };

//   return (
//     <div>
//       <ul>
//         {company.map((item) => (
//           <li key={item.id}>
//             <Link to={`/companies/${item.id}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function CompanyList(props) {
  return (
    <section>
      {props.companies.map((company) => {
        return <p>{company.name}</p>;
      })}
    </section>
  );
}
