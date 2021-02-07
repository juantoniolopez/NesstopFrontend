import "../css/LoginForm.css";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <input type="submit" value="Iniciar Sesión" />
    </form>
  );
}
