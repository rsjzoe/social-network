import { Link } from "react-router-dom";

export function SeConnecter({onclick }) {
  return (
    <>
      <div className="form-container sign-in-container">
        <form>
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
                className="input"
              />
            </div>
            <div className="input-container">
              <img className="icon" src="lock.svg" />
              <input type="password" placeholder="Password" className="input" />
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

          <Link to="/">
            <button type="button">Login</button>
          </Link>
        </form>
      </div>
    </>
  );
}
