import { useQuery } from "@tanstack/react-query";
import Header from "../common/header";
import { QUERY_APP_CONFIG } from "../../utils/constants";
import { fetchAppConfig } from "../../services";
import FullscreenLoader from "./fullscreenLoader";

const PublicLayout = ({ className, children }) => {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_APP_CONFIG],
    queryFn: fetchAppConfig,
  });

  return (
    <div className={`page ${className}`}>
      <img
        src="https://storage.123fakturere.no/public/wallpapers/geiranger.jpg"
        alt="background-wallpaper"
        className="background-wallpaper"
      />
      {isPending && <FullscreenLoader />}
      {data && (
        <>
          <Header links={data?.links} />
          {children}
        </>
      )}
    </div>
  );
};

export default PublicLayout;
