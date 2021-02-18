import useAuth from "../shared/hooks/useAuth";

function LogOut() {
  const { signOut } = useAuth();
  return (
    <>
      <button onClick={signOut}>LOG OUT</button>
    </>
  );
}

export default LogOut;
