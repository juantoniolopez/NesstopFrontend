// import { useState } from "react";
import useAuth from "../shared/hooks/useAuth";
import { useForm } from "react-hook-form";
import "../css/RegisterUserForm.css";

export default function RegisterUserForm() {
  const { register, handleSubmit, errors } = useForm();
  // const [errorMessage, setErrorMessage] = useState("");
  // const [statusMessage, setstatusMessage] = useState("");
  const { signUpUser } = useAuth();

  const onRegister = (data) => {
    signUpUser(data);
  };
  //   try {
  //     const serverResponse = await signUp(data);
  //     if (errorMessage.length > 0) {
  //       setErrorMessage("");
  //     }
  //     if (serverResponse.message) {
  //       setstatusMessage(serverResponse.message);
  //     }
  //   } catch (error) {
  //     setErrorMessage(error);
  //   }
  // };

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
        name="surname"
        ref={register({ required: true, minLength: 4 })}
        id="surname"
        placeholder="Apellido"
      />
      {errors.surname && (
        <p className="error">Escribe un nombre que tenga minimo 4 letras</p>
      )}

      <input
        name="dni"
        ref={register({ required: true, minLength: 4 })}
        id="dni"
        placeholder="DNI"
      />
      {errors.dni && <p className="error">Escribe tu DNI con letra </p>}

      <input placeholder="Dirección" name="address" />

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

      {/* <input
        id="photo"
        className="photo"
        ref={register}
        type="file"
        name="photo"
      ></input> */}

      <input id="submitregister" type="submit" value="Crear cuenta" />

      {/* {statusMessage.length > 0 && <p>{statusMessage}</p>}
      {errorMessage.length > 0 && <p>{errorMessage}</p>} */}
    </form>
  );
}
