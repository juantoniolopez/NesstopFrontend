import React from "react";
import decodeTokenData from "../utils/decodeTokenData";
import { useState } from "react";
import {
  login,
  logincompany,
  signUpApiCompany,
  signUpApiUser,
} from "../../http/api";
import { useHistory } from "react-router-dom";

// 1 Creamos el contexto y exportamos para usar en el hook
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

// 2 Recuperamos el token del localStorage
const token = localStorage.getItem("token");
const tokenObject = decodeTokenData(token);

// 3 Creamos un custom provider
export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  const history = useHistory();

  // Método para hacer log in de usuario desde los componentes
  const signIn = async (email, password) => {
    const loginData = await login(email, password);
    localStorage.setItem("token", loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push("/");
  };

  // Método para hacer log in de empresa desde los componentes
  const signInCompany = async (email, password) => {
    const loginData = await logincompany(email, password);
    localStorage.setItem("token", loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push("/");
  };

  // Método para registrarse usuario
  const signUpUser = async (data) => {
    const signUpData = await signUpApiUser(data);
    console.log(signUpData);
    // return message;
    history.push("/");
  };

  // Método para registrarse empresa
  const signUpCompany = async (data) => {
    const signUpData = await signUpApiCompany(data);
    console.log(signUpData);
    history.push("/");
  };

  // Método que borra las credenciales del localStorage y del state
  const signOut = (data) => {
    localStorage.removeItem("token");
    history.push("/login");
    setUserData(null);
    setIsUserLogged(false);
  };

  // 4 devolvemos el provider metiendole dentro los children
  return (
    <AuthContextProvider
      value={{
        userData,
        signIn,
        signInCompany,
        signUpUser,
        signUpCompany,
        signOut,
        isUserLogged,
      }}
    >
      {children}
    </AuthContextProvider>
  );
}
