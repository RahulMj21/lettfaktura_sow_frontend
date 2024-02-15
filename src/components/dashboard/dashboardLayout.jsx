import DashboardHeader from "./dashboardHeader";
import DashboardSidebar from "./dashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="content">
        <DashboardSidebar />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
