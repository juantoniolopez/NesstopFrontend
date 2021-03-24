import useAuth from "../shared/hooks/useAuth";
import { useForm } from "react-hook-form";
import "../css/RegisterUserForm.css";
import { useRef } from "react";

export default function RegisterCompanyForm() {
  const { register, handleSubmit, errors, watch } = useForm();
  const { signUpCompany } = useAuth();

  const password = useRef({});

  password.current = watch("password", "");

  console.log(errors);

  const onRegister = (data) => {
    const { city, email, name, password } = data;
    signUpCompany({ city, email, name, password });
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <input
        name="name"
        ref={register({ required: true, minLength: 4 })}
        id="name"
        placeholder="Nombre"
      />
      {errors.name && (
        <p className="error">Escribe un nombre que tenga minimo 4 letras</p>
      )}

      <input
        placeholder="Ciudad de la empresa"
        name="city"
        ref={register({})}
      />

      <input
        ref={register({ required: true, minLength: 2 })}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      {errors.email && <p className="error">Escribe un mail valido</p>}

      <input
        ref={register({ required: true, minLength: 2 })}
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />

      {errors.password && <p className="error">Escribe un contraseña válida</p>}
      <input
        ref={register({
          required: true,
          minLength: 2,
          validate: (value) =>
            value === password.current || "Las contraseñas no coinciden",
        })}
        id="repeatpassword"
        type="password"
        name="repeatpassword"
        placeholder="Repeat Password"
      />

      {errors.repeatpassword && (
        <p className="error">{errors.repeatpassword.message}</p>
      )}

      <input id="submitregister" type="submit" value="Crear cuenta" />
    </form>
  );
}
