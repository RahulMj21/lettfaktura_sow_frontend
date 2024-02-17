import PublicLayout from "../components/common/publicLayout";

const Register = () => {
  return (
    <PublicLayout className="auth register">
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
    </PublicLayout>
  );
};

export default Register;
