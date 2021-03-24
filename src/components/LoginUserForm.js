import "../css/LoginForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../shared/hooks/useAuth";
import { useState } from "react";

export default function LoginUserForm() {
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();

  const onLogin = async (data) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <input
        name="email"
        ref={register({ required: true, minLength: 4 })}
        id="email"
        type="email"
        placeholder="Email"
      />
      {errors.email && <p className="error">Usuario incorrecto</p>}

      <input
        name="password"
        ref={register({ required: true, minLength: 4 })}
        id="password"
        type="password"
        placeholder="Password"
      />
      {errors?.password?.type === "required" && (
        <p className="error">La contraseña es obligatoria</p>
      )}
      {errors?.password?.type === "minLength" && (
        <p className="error">
          La contraseña tiene que tener por lo menos 4 caracteres
        </p>
      )}
      <input type="submit" value="Iniciar Sesión" />

      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}
