import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {id} = useParams();
    const [state,setState] = useState({
        id:0,
        title: "",
        description:"",
        image: "",
        price: 0,
        category: "",

    });
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data);
        });
    },[]);
  return (
  
    <div style={{
        textAlign:"center",
        marginTop : "100px"
    }} >
     
      <img src={state.image} alt="" width={300} height={300} />
      <h2>{state.category}</h2>  
    </div>
  );
}

export default ProductDetails;
