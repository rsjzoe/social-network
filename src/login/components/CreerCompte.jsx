import { useState } from "react";

export function CreerCompte({ onclick }) {
  const [compteur, setCompteur] = useState(0);
  return (
    <>
      {" "}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </div>
          <span>or your email for inscription</span>
          <div className="inputs">
            <div className="input-container">
              <img className="icon" src="user.svg" />
              <input type="text" placeholder="Enter Pseudo" className="input" />
            </div>

            <div className="input-container">
              <img className="icon" src="mail.svg" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
              />
            </div>
            <div className="input-container">
              <img className="icon" src="lock.svg" />
              <input
                type="password"
                placeholder="Password"
                className="input"
              />
            </div>
          </div>
          
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
