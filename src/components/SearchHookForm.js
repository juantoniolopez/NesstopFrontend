import { useForm } from "react-hook-form";
import "../css/SearchHookForm.css";

export default function SearchHookForm() {
  const { register, handleSubmit } = useForm();

  const onSearch = (data) => {};

  return (
    <form id="search" onSubmit={handleSubmit(onSearch)}>
      <input
        id="inputsearch"
        ref={register({ required: true, minLength: 4 })}
        placeholder="Nombre o ciudad de la empresa"
        name="company"
      />

      <input id="submitsearch" type="submit" value="Buscar" />
    </form>
  );
}
