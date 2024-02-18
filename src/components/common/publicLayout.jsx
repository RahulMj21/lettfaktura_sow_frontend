import Header from "../common/header";

const PublicLayout = ({ className, children }) => {
  return (
    <div className={`page ${className}`}>
      <img
        src="https://storage.123fakturere.no/public/wallpapers/geiranger.jpg"
        alt="background-wallpaper"
        className="background-wallpaper"
      />
      <Header />
      {children}
    </div>
  );
};

export default PublicLayout;
