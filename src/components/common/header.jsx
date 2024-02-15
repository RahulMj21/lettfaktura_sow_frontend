import { useState } from "react";
import HambugerIcon from "../icons/hamburger";
import LanguageSwitcher from "./languageSwitcher";

const headerProps = {
  logo: "https://storage.123fakturere.no/public/icons/diamond.png",
  links: [
    { text: "home", href: "/" },
    { text: "orders", href: "/orders" },
    { text: "our_customer", href: "/customers" },
    { text: "about_us", href: "/about" },
    { text: "contact_us", href: "/contact" },
  ],
};

const Header = () => {
  const { logo, links } = headerProps;

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
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
