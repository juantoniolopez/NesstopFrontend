import NavLoginRegister from "../components/NavLoginRegister";
import NavRegisterUserCompany from "../components/NavRegisterUserCompany";
import RegisterUserForm from "../components/RegisterUserForm";

export default function RegisterUser() {
  return (
    <>
      <NavLoginRegister></NavLoginRegister>
      <NavRegisterUserCompany></NavRegisterUserCompany>
      <RegisterUserForm></RegisterUserForm>
    </>
  );
}
