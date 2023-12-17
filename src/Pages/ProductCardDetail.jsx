import Button from 'react-bootstrap/Button';

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductCardDetail = () => {
    const {id} = useParams()

    const [counter,setCounter] = useState(1)
   

    const [product,setProduct] = useState([])
    console.log(id);
    const getProduct = async () => {
        try {
          const res = await fetch(
            `https://anthonyfs.pythonanywhere.com/api/products/${id}`
          );
    
          const data = await res.json();
          
       setProduct(data)
         
          console.log(product);
        } catch (error) {
          console.log("Something went wrong");
        }
      };
     useEffect(() => {
      getProduct()
     }, [])
     
  return (
<>
  {product ?  (<div className="card-list d-flex flex-column mx-auto p-5 text-center">

        <div className="category">
            {product.category}
        </div>

        <div className="title mb-3">
            {product.title}
        </div>
        <div>
          <img src={product.image} alt="product-image" width="450px" className="" />  
        </div>
        <div className="description mt-5">
            {product.description}
        </div>
        <div className="price mt-3">
            {product.price} $
        </div>

        <div className="quantity m-3 p-2">
        <Button variant="primary" onClick={()=>setCounter(counter < 1 ? 1 : (counter - 1))}>-</Button> {counter < 1 ? 1 : counter} <Button variant="danger" onClick={()=> setCounter(counter + 1)}>+</Button>
        </div>
   <div className="total">
    {`${((counter < 1 ? 1 : counter) * product.price).toFixed(2)}$`}
   </div>
        

    </div>) :
( <div>LOADING...</div> )
}
</>
  
  )
}

export default ProductCardDetail