import Header from "../components/header";

const Home = () => {
  return (
    <div
      className="home page"
      style={{
        background:
          "url(https://storage.123fakturere.no/public/wallpapers/geiranger.jpg) center/cover fixed",
      }}
    >
      <Header />
    </div>
  );
};

export default Home;
