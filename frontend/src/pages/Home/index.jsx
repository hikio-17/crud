import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/product");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/product/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    // console.log(e.currentTarget.value);
    const response = await axios.get("http://localhost:8000/product");
    console.log(response);
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tamah Produk
      </Link>
      <div className="search">
        <input
          type="text"
          onChane={handleSearch}
          placeholder="Masukan kata kunci..."
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td className="text-right">{product.price}</td>
              <td className="text-center">
                <Link
                  to={`/detail/${product._id}`}
                  className="btn btn-sm btn-info"
                >
                  Detail
                </Link>
                <Link
                  to={`/edit/${product._id}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
