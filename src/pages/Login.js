import LoginForm from "../components/LoginForm";
import NavLoginRegister from "../components/NavLoginRegister";
import NavLoginUserCompany from "../components/NavLoginUserCompany";

export default function Login() {
  return (
    <>
      <NavLoginRegister></NavLoginRegister>
      <NavLoginUserCompany></NavLoginUserCompany>
      <LoginForm></LoginForm>
    </>
  );
}
