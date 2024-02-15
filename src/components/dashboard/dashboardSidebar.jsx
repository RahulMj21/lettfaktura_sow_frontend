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

const sidebarLinks = [
  { text: "Invoices", href: "/", isDisabled: false },
  { text: "Customer", href: "/", isDisabled: false },
  { text: "My Business", href: "/", isDisabled: false },
  { text: "Invoice Journal", href: "/", isDisabled: false },
  { text: "Price List", href: "/", isDisabled: false },
  { text: "Multiple Invoicing", href: "/", isDisabled: false },
  { text: "Unpaid Invoices", href: "/", isDisabled: false },
  { text: "Offer", href: "/", isDisabled: false },
  { text: "Inventory Control", href: "/", isDisabled: true },
  { text: "Member Invoicing", href: "/", isDisabled: true },
  { text: "Import/Export", href: "/", isDisabled: false },
];
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
const DashboardSidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">Menu</h2>
      <div className="sidebar-links">
        {sidebarLinks.map(({ text, href }) => (
          <a className="sidebar-link" key={text} href={href}>
            <div className="link-group">
              <span className="dot" />
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
