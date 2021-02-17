import "../css/LoginForm.css";
import { useForm } from "react-hook-form";
import useAuth from "../shared/hooks/useAuth";
import { useState } from "react";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
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

      <input
        name="password"
        ref={register({ required: true, minLength: 6 })}
        id="password"
        type="password"
        placeholder="Password"
      />

      <input type="submit" value="Iniciar Sesión" />

      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}
