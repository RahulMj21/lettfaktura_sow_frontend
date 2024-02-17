import PublicLayout from "../components/common/publicLayout";

const ForgotPassword = () => {
  return (
    <PublicLayout className="auth forgot-password">
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
    </PublicLayout>
  );
};

export default ForgotPassword;
