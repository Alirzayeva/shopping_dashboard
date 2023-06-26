import React from "react";
// import React, { useEffect, useState, useContext } from "react";
// import { MainContext } from "../utils/MainContext";import { FaTrash } from "react-icons/fa";
const AllProducts = () => {
  return (
    <section className="allProducts">
      <div className="container">
        <h2>All Product</h2>

        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Name</th>
              <th>Title</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="" />
              </td>
              <td>Name</td>
              <td>Title</td>
              <td>Price</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllProducts;
