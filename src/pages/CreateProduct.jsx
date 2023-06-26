import React from "react";

const CreateProduct = () => {
  // const [data, setData] = useState({
  //   name: "",
  //   details: "lorem10",
  //   productImage: "uploads/nike-1png",
  //   price: 100,
  // });

  return (
    <section className="createProduct">
      <div className="container">
        <div className="row">
          <form>
            <input
              className="default"
              type="text"
              name="name"
              placeholder="Product name"
            />
            <input
              className="default"
              type="number"
              name="price"
              placeholder="Product price"
            />
            <input
              className="default"
              type="text"
              name="details"
              placeholder="Product about info"
            />
            <div className="image">
              <div className="preview">
                <img src="" alt="" />
              </div>
              <label htmlFor="image">
                Choose image
                <input
                  type="file"
                  className="default"
                  id="image"
                  name="productImg"
                  placeholder="Product image"
                />
              </label>
            </div>
            <button className="btn" type="submit" >Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
