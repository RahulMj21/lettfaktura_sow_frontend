import LanguageSwitcher from "../common/languageSwitcher";
import HamburgerIcon from "../icons/hamburger";

const DashboardHeader = () => {
  const toggleMobileNav = () => {
    document.querySelector(".nav-overlay").classList.toggle("show");
    document.querySelector(".sidebar").classList.toggle("show");
  };

  const closeMobileNav = () => {
    document.querySelector(".nav-overlay").classList.remove("show");
    document.querySelector(".sidebar").classList.remove("show");
  };

  return (
    <header className="dashboard-header">
      <div className="container">
        <button className="hamburger" onClick={toggleMobileNav}>
          <HamburgerIcon />
        </button>
        <div onClick={closeMobileNav} className="nav-overlay" />
        <div className="user">
          <div className="user-avatar">
            <span className="active-dot" />
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
