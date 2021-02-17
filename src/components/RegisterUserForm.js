import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/RegisterUserForm.css";
import useAuth from "../shared/hooks/useAuth";

export default function RegisterUserForm() {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const { signUp } = useAuth();

  const onRegister = async (data) => {
    try {
      await signUp(
        data.now,
        data.name,
        data.surname,
        data.dni,
        data.email,
        data.password
      );
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <input
        name="name"
        ref={register({ required: true, minLength: 4 })}
        id="name"
        placeholder="Nombre"
      />

      <input
        name="surname"
        ref={register({ required: true, minLength: 4 })}
        id="surname"
        placeholder="Apellido"
      />

      <input
        name="dni"
        ref={register({ required: true, minLength: 4 })}
        id="dni"
        placeholder="DNI"
      />

      <input placeholder="Dirección" name="address" />

      <input
        ref={register({ required: true, minLength: 2 })}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />

      <input
        ref={register({ required: true, minLength: 2 })}
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />

      <input className="photo" ref={register} type="file" name="photo"></input>

      <input id="submitregister" type="submit" value="Crear cuenta" />
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}
    </form>
  );
}
