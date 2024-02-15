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
const DashboardSidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-heading">Menu</h2>
      <div className="sidebar-links">
        {sidebarLinks.map(({ text, href }) => (
          <a className="sidebar-link" key={text} href={href}>
            <div>{text}</div>
          </a>
        ))}
        <button>Log Out</button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
