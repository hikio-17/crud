import { Link, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  });

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:8000/product/${id}`);
    setName(response.data.name);
    setPrice(response.data.price);
    setStock(response.data.stock);
  };

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
