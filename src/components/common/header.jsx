import { useState } from "react";
import HambugerIcon from "../icons/hamburger";
import LanguageSwitcher from "./languageSwitcher";
import { Link } from "react-router-dom";

const headerProps = {
  links: [
    { text: "home", href: "/" },
    { text: "orders", href: "/orders" },
    { text: "our_customer", href: "/customers" },
    { text: "about_us", href: "/about" },
    { text: "contact_us", href: "/contact" },
  ],
};

const Header = () => {
  const { links } = headerProps;

  const [showMobileNav, setShowMobileNav] = useState(false);

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
          <Link to="/" className="logo">
            <img
              src="https://storage.123fakturere.no/public/icons/diamond.png"
              alt="logo image"
            />
          </Link>
          <nav className={`nav ${showMobileNav ? "show" : ""}`}>
            {links.map((link) => (
              <Link className="nav-link" to={link.href} key={link.text}>
                {link.text.replaceAll("_", " ")}
              </Link>
            ))}
          </nav>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
