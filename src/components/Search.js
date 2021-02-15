import { useForm } from "react-hook-form";
import "../css/Search.css";

export default function Search() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};
  return (
    <form id="search" onSubmit={handleSubmit(onSubmit)}>
      <input
        id="inputsearch"
        ref={register}
        placeholder="Nombre o ciudad de la empresa"
        name="companyname"
      />
    </form>
  );
}
