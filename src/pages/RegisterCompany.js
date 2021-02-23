import NavLoginRegister from "../components/NavLoginRegister";
import NavRegisterUserCompany from "../components/NavRegisterUserCompany";
import RegisterCompanyForm from "../components/RegisterCompanyForm";

export default function RegisterCompany() {
  return (
    <>
      <NavLoginRegister></NavLoginRegister>
      <NavRegisterUserCompany></NavRegisterUserCompany>
      <RegisterCompanyForm></RegisterCompanyForm>
    </>
  );
}
