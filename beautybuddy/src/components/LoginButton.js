import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginwithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginwithRedirect()}>Sign In</button>
    )
  );
};

export default LoginButton;
