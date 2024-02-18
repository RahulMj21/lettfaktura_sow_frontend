import DashboardHeader from "./dashboardHeader";
import DashboardSidebar from "./dashboardSidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchSidebarLinks } from "../../services";
import { QUERY_SIDEBAR_LINKS } from "../../utils/constants";
import FullscreenLoader from "../common/fullscreenLoader";

const DashboardLayout = ({ children }) => {
  const { data, isPending } = useQuery({
    queryKey: [QUERY_SIDEBAR_LINKS],
    queryFn: fetchSidebarLinks,
  });

  if (isPending) return <FullscreenLoader />;

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="content">
        <DashboardSidebar links={data} />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
