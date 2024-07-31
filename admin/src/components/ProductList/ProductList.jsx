import React, { useEffect, useState } from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import deleteicon from '../../assets/delete.png';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/product', { method: 'GET' });
      const result = await response.json();
      console.log(result, 'ProductData');
      setData(result.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/product/${id}`, { method: 'DELETE' });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const renderValue = (value) => {
    if (value && typeof value === 'object' && value.$numberDecimal) {
      return parseFloat(value.$numberDecimal);
    }
    return value;
  };

  return (
    <div className='product-list-container'>
      <table className='product-list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e._id}>
              <td>
                <Link to={`/product/${e._id}`} className="product-name">
                  <img src={e.image} width={40} alt={e.name} />
                  <span>{e.name}</span>
                </Link>
              </td>
              <td>{e.categoryinProduct}</td>
              <td>{renderValue(e.price)}</td>
              <td>{renderValue(e.offerprice)}</td>
              <td>{renderValue(e.countInStock)}</td>
              <td>
                <img
                  src={deleteicon}
                  width={20}
                  alt="delete"
                  className="delete-icon"
                  onClick={() => deleteProduct(e._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
