import { useForm } from "react-hook-form";

export default function SearchBoxHook(props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form id="search" onSubmit={handleSubmit(props.onSubmit)}>
      <input name="query" ref={register({ required: true, minLength: 4 })} />
      {errors.query && (
        <p className="error">Debes introducir un nombre más largo</p>
      )}
      <input type="submit" />
    </form>
  );
}
