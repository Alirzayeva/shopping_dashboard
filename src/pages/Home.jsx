import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h2>Sneakers Shopping  Admin Panel</h2>
        <button><Link to="/shop">Shop page go</Link></button>
      </div>
    </section>
  );
};

export default Home;
