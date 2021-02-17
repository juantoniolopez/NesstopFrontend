import SearchHookForm from "../components/SearchHookForm";
// import Rodal from "rodal";
import "./LandingUA.css";
import "rodal/lib/rodal.css";

export default function LandingUA() {
  return (
    <>
      <div className="container">
        <h1>Landing Usuario Anónimo</h1>
        <SearchHookForm></SearchHookForm>
      </div>
    </>
  );
}
