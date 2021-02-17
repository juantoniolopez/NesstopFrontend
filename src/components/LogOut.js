import useAuth from "../shared/hooks/useAuth";

function LogOut() {
  const { userData, signOut } = useAuth();
  return (
    <>
      <button onClick={signOut}>LOG OUT</button>
      <p>ID: {userData && userData.id}</p>
      <p>EXP: {userData && userData.exp}</p>
    </>
  );
}

export default LogOut;
