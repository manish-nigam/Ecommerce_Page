import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"
const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setProducts(data)
        });
    },[]);
  return (
    <div style= {{padding: "30px"}}>
      <h2 style={{color: "red"}}>Products Component</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam odit maiores minima excepturi impedit inventore possimus labore sint tenetur cupiditate, ducimus molestias consectetur. Mollitia culpa dolorum, eveniet sequi quia commodi nemo velit, natus ipsam placeat vitae magni itaque. Inventore error sint numquam quo totam eius voluptatem dicta repellendus optio.</p>
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => {
            return (
              <div className="cardStyle">
                <img src={product.image} width="200" height="200" alt='st' />
                <h3>{product.title}</h3>
                <p>$ {product.price} </p>
                <Link to={`/productdetails/${product.id}`}>
                  <button>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
        
    
    </div>
  );
}

export default Products;
