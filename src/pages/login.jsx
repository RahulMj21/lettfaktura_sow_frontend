import Header from "../components/header";

const Login = () => {
  // const handleOpen = () => {
  //   window.open(
  //     document.URL,
  //     "_blank",
  //     "location=yes,height=570,width=520,scrollbars=yes,status=yes",
  //   );
  // };

  return (
    <div
      className="page auth login"
      style={{
        background:
          "url(https://storage.123fakturere.no/public/wallpapers/geiranger.jpg) center/cover fixed",
      }}
    >
      <Header />
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
              <div>
                <input id="remember-me" type="checkbox" />
                <label htmlFor="remember-me">Remember me</label>
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
    </div>
  );
};

export default Login;
