import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";




const Shop = () => {
  const [products, setProducts] = useState([]);

useEffect(()=>{
getData();
},[])

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
{
  products.map(product=>{
    return (
    <Card />
    )
  })
}    
        </div>
      </div>
    </section>  )
}

export default Shop



// import axios from "axios";

// const Shop = () => {
//   // const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   // const getData = async () => {
//   //   try {
//   //     await axios.get(`http://localhost:5000/api/product`).then((res) => {
//   //       setProducts(res.data);
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   return (
    // <section className="shop">
    //   <div className="container">
    //     <div className="row">
    //        <Card />;
    
    //     </div>
    //   </div>
    // </section>
//   );
// };

// export default Shop;
