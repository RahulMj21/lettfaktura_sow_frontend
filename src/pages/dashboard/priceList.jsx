import { PlusCircle, Power, Printer } from "lucide-react";
import SearchInput from "../../components/common/SearchInput";
import DashboardLayout from "../../components/dashboard/dashboardLayout";
import ProductTable from "../../components/pricelist/productTable";

const products = [
  {
    id: 1,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 2,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 3,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 4,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 5,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 6,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 7,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 8,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 9,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 10,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 11,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 12,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 13,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 14,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 15,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 16,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 17,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 18,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 19,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 20,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
  {
    id: 21,
    articleNo: 1233445566,
    name: "test product",
    description: "This is a small description of the test product",
    inPrice: 15000,
    price: 90000,
    unit: "kilometers/hours",
    inStock: 25000,
  },
];

const PriceList = () => {
  return (
    <DashboardLayout>
      <div className="price-list">
        {/* price-list actions */}
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
        {/* listed items */}
        <ProductTable products={products} />
      </div>
    </DashboardLayout>
  );
};

export default PriceList;
