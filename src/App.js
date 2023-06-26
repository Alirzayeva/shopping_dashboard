import { Route, Routes } from "react-router-dom";
import { MyContext } from "./utils/MainContext";

//Scss Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

//Scss Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import CreateProduct from "./pages/CreateProduct";
import ProductDetails from "./pages/ProductDetails";

import "./assets/scss/index.scss";

const App = () => {
  return (
    <MyContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/card" element={<Card />} />
        <Route path="/product-details" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </MyContext>
  );
};

export default App;
