import React from "react";
import "./App.css";
// import BookDetails from "../BookDetails/BookDetails";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Header from "../Header/Header";
import Author from "../Author/Author";
import Reviews from "../Reviews/Reviews";
import Reviews1 from "../Reviews copy/Reviews1";
import Navigation from "../Navigation /Navigation";
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Author />
      {/* <Reviews1 /> */}
      <Reviews />
    </div>
  );
};

export default App;
