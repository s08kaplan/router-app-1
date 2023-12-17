import { useState, useEffect } from "react";

import ProductCard from "../components/ProductCard";

const Home = () => {
  const [info, setInfo] = useState([]);

  

  const getData = async () => {
    try {
    //   const res = await fetch(`https://api.github.com/users/anthonyharold67/followers?per_page=100`)
      const res = await fetch(
        `https://anthonyfs.pythonanywhere.com/api/products/`
      );

      const data = await res.json();
   setInfo(data)
     
      console.log(info);
    } catch (error) {
      console.log("Something went wrong");
    }
  };
 useEffect(() => {
  getData()
 }, [])
 
  return (
    <main className="m-5">
      <ProductCard info={info} />
    </main>
  );
};

export default Home;
