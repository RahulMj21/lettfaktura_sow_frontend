import PublicLayout from "../components/common/publicLayout";

const Login = () => {
  return (
    <PublicLayout className="auth login">
      <main className="main">
        <div className="container">
          <div className="content">
            <h1 className="heading">Log In</h1>
            <form className="form">
              <div className="input-group">
                <label htmlFor="email">Enter your email address</label>
                <input type="email" id="email" placeholder="Email address" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <label htmlFor="password">Enter your password</label>
                <input type="password" id="password" placeholder="Password" />
                <p className="input-error"></p>
              </div>
              <div className="remember-me">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button className="btn-primary auth-btn">Log in</button>
            </form>
            <div className="other-options">
              <a href="/register">Register</a>
              <a href="/forgot-password">Forgotten Password?</a>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
};

export default Login;
