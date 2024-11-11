import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverUrl } from "../../../constants";
import { useUser } from "../../auth/useUser";

export function SeConnecter({ onclick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { fetchUser } = useUser();

  const onLogin = async () => {
    setErrorMessage("");

    const response = await fetch(`${serverUrl}/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    if (response.ok) {
      await fetchUser();
      return navigate("/");
    }
    setErrorMessage("email ou password oublié");
  };

  return (
    <>
      <div className="form-container sign-in-container">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();

            onLogin();
          }}
        >
          <h1>Login Now</h1>
          <div className="social-container">
            <a href="#" className="social">
              <img src="facebook-svgrepo-com.svg" />
            </a>
            <a href="#" className="social google">
              <img src="google-svgrepo-com.svg" />
            </a>
            <a href="#" className="social insta">
              <img src="instagram-svgrepo-com.svg" />
            </a>
          </div>
          <span>or use your account</span>
          <div className="inputs">
            <div className="input-container">
              <img className="icon" src="mail.svg" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="input"
              />
            </div>
            <div className="input-container">
              <img className="icon" src="lock.svg" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="input"
              />
            </div>
          </div>
          <div className="action">
            <a href="#" className="forgot-password">
              forgot?
            </a>
            <span
              onClick={() => {
                onclick();
              }}
              className="create-account"
            >
              Create account
            </span>
          </div>
          {errorMessage && (
            <div className="">
              <span>{errorMessage}</span>
            </div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
