import { useState } from "react";
import LanguageSwitcher from "../common/languageSwitcher";
import HamburgerIcon from "../icons/hamburger";

const DashboardHeader = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };
  return (
    <header className="dashboard-header">
      <div className="container">
        <button className="hamburger" onClick={toggleMobileNav}>
          <HamburgerIcon />
        </button>
        <div
          onClick={closeMobileNav}
          className={`nav-overlay ${showMobileNav ? "show" : ""}`}
        />
        <div className="user">
          <div className="user-avatar">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="user avatar"
            />
          </div>
          <div className="user-details">
            <p className="user-name">Rahul Mondal</p>
            <p className="user-address">Kolkata, West Bengal</p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default DashboardHeader;
