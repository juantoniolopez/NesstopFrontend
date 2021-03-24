import LoginUserForm from "../components/LoginUserForm";
import NavLoginRegister from "../components/NavLoginRegister";
import NavLoginUserCompany from "../components/NavLoginUserCompany";

export default function Login() {
  return (
    <>
      <NavLoginRegister></NavLoginRegister>
      <NavLoginUserCompany></NavLoginUserCompany>
      <LoginUserForm></LoginUserForm>
    </>
  );
}
