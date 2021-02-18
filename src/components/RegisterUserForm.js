// import { useState } from "react";
// import useAuth from "../shared/hooks/useAuth";
import { useForm } from "react-hook-form";
import "../css/RegisterUserForm.css";
import { newUser } from "../http/api";

export default function RegisterUserForm() {
  const { register, handleSubmit } = useForm();
  // const [errorMessage, setErrorMessage] = useState("");
  // const [statusMessage, setstatusMessage] = useState("");
  // const { signUp } = useAuth();

  // const onRegister = async (data) => {
  //   try {
  //     const serverResponse = await signUp(
  //       data.name,
  //       data.surname,
  //       data.dni,
  //       data.email,
  //       data.password
  //     );
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

  const onRegister = (data) => {
    newUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <input
        name="name"
        ref={
          register
          // ({ required: true, minLength: 4 })
        }
        id="name"
        placeholder="Nombre"
      />

      <input
        name="surname"
        ref={
          register
          // ({ required: true, minLength: 4 })
        }
        id="surname"
        placeholder="Apellido"
      />

      <input
        name="dni"
        ref={
          register
          // ({ required: true, minLength: 4 })
        }
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

      <input
        id="photo"
        className="photo"
        ref={register}
        type="file"
        name="photo"
      ></input>

      <input
        ref={register}
        id="submitregister"
        type="submit"
        value="Crear cuenta"
      />
      {/* {statusMessage.length > 0 && <p className="status-ok">{statusMessage}</p>}
      {errorMessage.length > 0 && <p className="error">{errorMessage}</p>} */}
    </form>
  );
}
