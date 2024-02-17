import Header from "../common/header";

const PublicLayout = ({ className, children }) => {
  return (
    <div
      className={`page ${className}`}
      style={{ background: "var(--background-image)" }}
    >
      <Header />
      {children}
    </div>
  );
};

export default PublicLayout;
