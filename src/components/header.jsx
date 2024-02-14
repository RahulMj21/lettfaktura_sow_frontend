import { useState } from "react";
import HambugerIcon from "../components/icons/hamburger";

const headerProps = {
  logo: "https://storage.123fakturere.no/public/icons/diamond.png",
  languages: [
    {
      id: 1,
      name: "Bokmål",
      code: "bokmal",
      icon: "https://storage.123fakturere.no/public/flags/NO.png",
      is_default: true,
      is_active: true,
      is_premium: false,
    },
    {
      id: 2,
      name: "Nynorsk",
      code: "nynorsk",
      icon: "https://storage.123fakturere.no/public/flags/NO.png",
      is_default: false,
      is_active: true,
      is_premium: false,
    },
    {
      id: 3,
      name: "English",
      code: "english",
      icon: "https://storage.123fakturere.no/public/flags/GB.png",
      is_default: false,
      is_active: true,
      is_premium: false,
    },
  ],
  links: [
    { text: "home", href: "/" },
    { text: "orders", href: "/orders" },
    { text: "our_customer", href: "/customers" },
    { text: "about_us", href: "/about" },
    { text: "contact_us", href: "/contact" },
  ],
};

const Header = () => {
  const { logo, links, languages } = headerProps;

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
        <div className="left">
          <button className="hamburger" onClick={toggleMobileNav}>
            <HambugerIcon />
          </button>
          <div
            onClick={closeMobileNav}
            className={`nav-overlay ${showMobileNav ? "show" : ""}`}
          />
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
