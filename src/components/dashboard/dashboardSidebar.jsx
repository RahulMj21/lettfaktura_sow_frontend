import {
  BookUser,
  Cog,
  FileText,
  Files,
  LogOut,
  NotebookText,
  Tag,
  TicketPercent,
  UploadCloud,
  UserRound,
  Warehouse,
  XCircle,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const linkIcons = {
  Invoices: <FileText className="sidebar-link-icon sky-blue" />,
  Customer: <UserRound className="sidebar-link-icon cyan" />,
  "My Business": <Cog className="sidebar-link-icon sky-blue" />,
  "Invoice Journal": <NotebookText className="sidebar-link-icon sky-blue" />,
  "Price List": <Tag className="sidebar-link-icon yellow" />,
  "Multiple Invoicing": <Files className="sidebar-link-icon sky-blue" />,
  "Unpaid Invoices": <XCircle className="sidebar-link-icon pink" />,
  Offer: <TicketPercent className="sidebar-link-icon yellow" />,
  "Inventory Control": <Warehouse className="sidebar-link-icon sky-blue" />,
  "Member Invoicing": <BookUser className="sidebar-link-icon blue" />,
  "Import/Export": <UploadCloud className="sidebar-link-icon cyan" />,
};
const DashboardSidebar = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">Menu</h2>
      <div className="sidebar-links">
        {links?.map(({ id, text, href }) => (
          <a className="sidebar-link" key={id} href={href}>
            <div className="link-group">
              <span className={`dot ${pathname === href ? "active" : ""}`} />
              {linkIcons[text]}
              {text}
            </div>
          </a>
        ))}
        <button className="logout-btn">
          <LogOut className="logout-icon" /> Log Out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
