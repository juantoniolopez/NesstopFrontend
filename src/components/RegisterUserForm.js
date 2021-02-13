import { useForm } from "react-hook-form";
import "../css/RegisterUserForm.css";

export default function RegisterUserForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} placeholder="Nombre" name="companyname" />

      <input placeholder="Dirección" name="address" />

      <input
        ref={register({ required: true, minLength: 2 })}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />

      <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />

      <input className="photo" ref={register} type="file" name="photo"></input>

      <input id="submitregister" type="submit" value="Crear cuenta" />
    </form>
  );
}
