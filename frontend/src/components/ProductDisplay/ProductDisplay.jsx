import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import TotalReview from '../TotalReview/TotalReview'
import add from '../../assets/add.png';
import greeenadd from '../../assets/add_icon_green.png';
import redremove from '../../assets/remove_icon_red.png';

const ProductDisplay = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(200); // Set default price range to 200
  const [cilckFilter, setCilckFilter] = useState(false);
  const { cart, dispatch } = useCart();

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_DOMAIN +'/category-list')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVER_DOMAIN +'/product')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const addToCart = (product) => {
    const productInCart = cart.find(item => item._id === product._id);
    if (productInCart) {
      updateQuantity(product, 1);
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    }
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product._id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { _id: product._id, quantity } });
    }
  };

  const getProductQuantity = (productId) => {
    const product = cart.find(item => item._id === productId);
    return product ? product.quantity : 0;
  };

  const renderValue = (value) => {
    if (value && typeof value === 'object' && value.$numberDecimal) {
      return parseFloat(value.$numberDecimal);
    }
    return value;
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return total / reviews.length;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star full">&#9733;</span>); // Full star
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<span key={i} className="star half">&#9733;</span>); // Half star
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>); // Empty star
      }
    }

    return stars;
  };

  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoryinProduct);
    const inPriceRange = renderValue(product.offerprice) <= priceRange;
    return inCategory && inPriceRange;
  });

  return (
    <div className='product-display'>
      <button className='btn-filter' onClick={() => setCilckFilter(curr => !curr)}>Filters</button>
      <div className={`filter ${cilckFilter ? "active" : ""}`}>
        <div className="filter-heading">
          <h1>Category</h1>
          <hr />
        </div>
        <div className="types">
          <h2>Type</h2>
          {data.map((e) => (
            <div className="category-types" key={e.category.name}>
              <input
                type="checkbox"
                name={e.category.name}
                id={e.category.name}
                checked={selectedCategories.includes(e.category.name)}
                onChange={() => handleCategoryChange(e.category.name)}
              />
              <label htmlFor={e.category.name}>{e.category.name}</label>
            </div>
          ))}
        </div>
        {/* <div className="price-range">
          <h2>Price Range</h2>
          <input
            type="range"
            min="0"
            max="200" // Update max price to 200
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="slider"
          />
          <p>Up to ₹{priceRange}</p>
        </div> */}
      </div>
      <hr className='left-hr' />
      <div className="product-dis">
        {filteredProducts.map((e) => {
          let percentage = 100 - (renderValue(e.offerprice) / renderValue(e.price)) * 100;
          let quantity = getProductQuantity(e._id);
          let averageRating = calculateAverageRating(e.reviews);
          let finalprice = e.offerprice * quantity * e.productWeight * 6
          finalprice = Math.round(finalprice)
          return (
            <div className="product-card-1" key={e._id}>
              <div className="product-image-1">
                <img src={import.meta.env.VITE_SERVER_DOMAIN +`/${e.image}`} alt={e.name} />
              </div>
              <div className="product-details-1">
                <h3><Link to={`/products/${e._id}`} className='title'>{e.name}</Link></h3>
                {/* <div className="product-rating-1">
                  <TotalReview productId={e._id}/>
                </div>
                <div className="product-pricing-1">
                  <span className="offer-price">₹{renderValue(e.offerprice)}</span>
                  <del className="original-price">₹{renderValue(e.price)}</del>
                  <span className="discount">({percentage.toFixed(2)}% off)</span>
                </div> */}
                {/* {
                  quantity ? <h4>₹{finalprice.toFixed(2)}</h4> : ""
                } */}
                {/* <div className="add-button">
                  {quantity === 0 ? (
                    <img
                      className="black-add"
                      src={add}
                      height={35}
                      onClick={() => addToCart(e)}
                      alt="Add to cart"
                    />
                  ) : (
                    <div className="quantity-pd">
                      <img
                        src={redremove}
                        height={35}
                        onClick={() => updateQuantity(e, quantity - 1)}
                        alt="Remove from cart"
                      />
                      <span>{quantity}</span>
                      <img
                        src={greeenadd}
                        height={35}
                        onClick={() => updateQuantity(e, quantity + 1)}
                        alt="Add to cart"
                      />
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
