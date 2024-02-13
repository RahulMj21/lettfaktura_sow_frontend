import { useState } from "react";

const Header = ({ logo, links, languages }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="left" onBlur={closeMobileNav}>
          <button className="hamburger" onClick={toggleMobileNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <a href="/" className="logo">
            <img src={logo} alt="logo image" />
          </a>
          <nav className={`nav ${showMobileNav ? "show" : ""}`}>
            {links.map((link) => (
              <a className="nav-link" href={link.href} key={link.text}>
                {link.text.replaceAll("_", " ")}
              </a>
            ))}
          </nav>
        </div>
        <div className="language-switcher" onBlur={closeDropdown}>
          <button onClick={toggleDropdown} className="language-switcher-btn">
            <span>English</span>
            <img
              src="https://storage.123fakturere.no/public/flags/GB.png"
              alt="English"
              className="flag"
            />
          </button>
          {showDropdown && (
            <div className="language-switcher-dropdown">
              {languages.map((language) => (
                <button key={language.name} className="dropdown-btn">
                  <span>{language.name}</span>
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="flag"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
