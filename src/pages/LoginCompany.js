import LoginCompanyForm from "../components/LoginCompanyForm";
import NavLoginRegister from "../components/NavLoginRegister";
import NavLoginUserCompany from "../components/NavLoginUserCompany";

export default function LoginCompany() {
  return (
    <>
      <NavLoginRegister></NavLoginRegister>
      <NavLoginUserCompany></NavLoginUserCompany>
      <LoginCompanyForm></LoginCompanyForm>
    </>
  );
}
