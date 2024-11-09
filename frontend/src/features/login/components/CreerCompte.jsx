import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../../../constants";

export function CreerCompte({ onclick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onRegister = async () => {
    setErrorMessage("");
    const response = await fetch(`${serverUrl}/inscription`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      return navigate("/");
    }
    setErrorMessage("email dejà existe");
  };

  return (
    <>
      {" "}
      <div className="form-container sign-up-container">
        <form
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            onRegister();
          }}
        >
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <img src="facebook-svgrepo-com.svg" />
            </a>
            <a href="#" className="social google">
              <img src="google-svgrepo-com.svg" />
            </a>
            <a href="#" className="social instagram">
              <img src="instagram-svgrepo-com.svg" />
            </a>
          </div>
          <span>or your email for inscription</span>
          <div className="inputs">
            <div className="input-container">
              <img className="icon" src="user.svg" />
              <input
                type="text"
                placeholder="Enter Pseudo"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className="input"
              />
            </div>

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

          {errorMessage && (
            <div className="">
              <span>{errorMessage}</span>
            </div>
          )}
          <span
            onClick={() => {
              onclick();
            }}
            className="create-account"
          >
            Log in
          </span>
          <button>Sing on</button>
        </form>
      </div>
    </>
  );
}
