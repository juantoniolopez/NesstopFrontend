import { useForm } from "react-hook-form";
import "../css/SearchHookForm.css";

export default function SearchHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register}
        placeholder="Nombre de la empresa"
        name="companyname"
      />
      <input placeholder="Dirección" name="address" />
      <input type="submit" value="Buscar" />
    </form>
  );
}
