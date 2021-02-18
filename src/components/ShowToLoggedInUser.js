import useAuth from "../shared/hooks/useAuth";

export default function ShowToLoggedInUser(children) {
  const { isUserLogged } = useAuth();

  return <>{isUserLogged ? children : null}</>;
}
