import React  from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';

const ProductDetails = () => {
//   const { id } = useParams();

//   const [product, setProducts]=useState(null);

// useEffect(()=>{
//   getSingleData()
// }, []);

// const getSingleData = async () =>{
//   try {
//     await axios.get(`http://localhost:5000/api/products/${id}`).then(res=>{
//       setProducts(res.data)
//     });
//   } catch (error) {
//     console.log(error)
//   }
// };



  return (
    <section className="productDetails">
      <div className="container">
        <div className="row">
   <div className="product">
    <div className="leftSide">
      <div className="productImg">
        <img src=""
        // {`http://localhost:5000/${product.productImage}`} 
        alt="" />
      </div>
    </div>
    <div className="rightSide">
      <div className="productInfo">
        <h2 className="productTitle">
          {/* {product.name} */}
        </h2>
        <p className="productDetail">
          {/* {product.details} */}
          </p>
        <p className="productPrice">
          {/* {product.price} */}
          </p>
      </div>
    </div>
   </div>
        </div>
      </div>
    </section>  )
}

export default ProductDetails