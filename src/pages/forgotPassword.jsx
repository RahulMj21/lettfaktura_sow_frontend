import Header from "../components/common/header";

const ForgotPassword = () => {
  return (
    <div
      className="page auth forgot-password"
      style={{ background: "var(--background-image)" }}
    >
      <Header />
      <main className="main">
        <div className="container">
          <div className="content">
            <h1 className="heading">Forgot your password</h1>
            <form className="form">
              <div className="input-group">
                <label htmlFor="email">Enter your email address</label>
                <input type="email" id="email" placeholder="Email address" />
                <p className="input-error"></p>
              </div>
              <button className="btn-primary auth-btn">Send password</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
