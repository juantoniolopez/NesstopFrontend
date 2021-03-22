import useAuth from "../shared/hooks/useAuth";

export default function ShowToGuestUser({ children }) {
  const { isUserLogged } = useAuth();

  return <>{!isUserLogged ? children : null}</>;
}
