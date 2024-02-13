const Header = ({ logo, links, languages }) => {
  console.log({ logo, links, languages });
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <a href="/">
            <img src={logo} alt="logo image" className="logo" />
          </a>
          <nav className="nav">
            {links.map((link) => (
              <a className="nav-link" href={link.href} key={link.text}>
                {link.text.replaceAll("_", " ")}
              </a>
            ))}
          </nav>
        </div>
        <div className="language-switcher">
          <button className="language-switcher-btn">
            <span>English</span>
            <img
              src="https://storage.123fakturere.no/public/flags/GB.png"
              alt="English"
              className="flag"
            />
          </button>
          <div className="language-switcher-dropdown">
            {languages.map((language) => (
              <button key={language.name} className="dropdown-btn">
                <span>{language.name}</span>
                <img src={language.icon} alt={language.name} className="flag" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;