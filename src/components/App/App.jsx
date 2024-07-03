import React from "react";
import "./App.css";
// import BookDetails from "../BookDetails/BookDetails";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Header from "../Header/Header";
import Author from "../Author/Author";
import Reviews from "../Reviews/Reviews";
import Navigation from "../Navigation /Navigation";
import About from "../About/About";
import Reviews1 from "../Reviews/Reviews1";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Author />
      <About />
      <Reviews1 />
      {/* <Reviews /> */}
    </div>
  );
};

export default App;
