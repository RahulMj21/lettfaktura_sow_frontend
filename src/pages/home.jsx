import Header from "../components/header";
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
const Home = () => {
  return (
    <main>
      <Header {...headerProps} />
    </main>
  );
};

export default Home;
