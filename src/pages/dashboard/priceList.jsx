import { PlusCircle, Power, Printer } from "lucide-react";
import SearchInput from "../../components/common/SearchInput";
import DashboardLayout from "../../components/dashboard/dashboardLayout";

const PriceList = () => {
  return (
    <DashboardLayout>
      <div className="price-list">
        <div className="price-list-actions">
          <div className="search-group">
            <SearchInput placeholder="Search Article No..." />
            <SearchInput placeholder="Search Product..." />
          </div>
          <div className="btn-group">
            <button className="action-button">
              <span>New Product</span>
              <PlusCircle className="action-icon light-green" />
            </button>
            <button className="action-button">
              <span>Print List</span>
              <Printer className="action-icon sky-blue" />
            </button>
            <button className="action-button">
              <span>Advanced Mode</span>
              <Power className="action-icon sky-blue" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PriceList;
