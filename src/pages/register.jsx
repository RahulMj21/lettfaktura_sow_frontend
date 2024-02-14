import Header from "../components/header";

const Register = () => {
  return (
    <div
      className="page auth register"
      style={{
        background:
          "url(https://storage.123fakturere.no/public/wallpapers/geiranger.jpg) center/cover fixed",
      }}
    >
      <Header />
      <main className="main">
        <div className="container">
          <div className="content">
            <h1 className="heading">Register</h1>
            <form className="form">
              <div className="input-group">
                <input placeholder="Business name" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input placeholder="Contact person" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input placeholder="Address" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input placeholder="Post number" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input placeholder="City" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email address" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input placeholder="Phone number" />
                <p className="input-error"></p>
              </div>
              <div className="input-group">
                <input type="password" placeholder="Choose password" />
                <p className="input-error"></p>
              </div>
              <button className="btn-primary auth-btn">Invoice Now</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
