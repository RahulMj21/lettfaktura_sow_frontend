import { MoreHorizontal } from "lucide-react";

const ProductTable = ({ products }) => {
  return (
    <table className="products-table">
      <thead>
        <th>Article No.</th>
        <th>Product/Service</th>
        <th>In Price</th>
        <th>Price</th>
        <th>Unit</th>
        <th>In Stock</th>
        <th>Description</th>
        <th></th>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.articleNo}</td>
            <td>{product.name}</td>
            <td>{product.inPrice}</td>
            <td>{product.price}</td>
            <td>{product.unit}</td>
            <td>{product.inStock}</td>
            <td>{product.description}</td>
            <td>
              <button className="product-row-btn">
                <MoreHorizontal />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
