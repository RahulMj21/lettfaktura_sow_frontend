import { useState } from "react";

const languages = [
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
];
const LanguageSwitcher = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
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
              <img src={language.icon} alt={language.name} className="flag" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
