import CompanyList from "../components/CompanyList";
// import Search from "../components/Search";
import SearchBoxHook from "../components/SearchBoxHook";
import "./ListCompaniesUA.css";

function ListCompaniesUA() {
  return (
    <>
      {/* <Search></Search> */}
      <SearchBoxHook></SearchBoxHook>

      <CompanyList></CompanyList>
    </>
  );
}

export default ListCompaniesUA;
