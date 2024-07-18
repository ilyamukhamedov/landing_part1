import React, { useState } from "react";
import "./App.css";
import Modal from "../Modal/Modal";

// import BookDetails from "../BookDetails/BookDetails";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Header from "../Header/Header";
import Author from "../Author/Author";
import Reviews from "../Reviews/Reviews";
import Navigation from "../Navigation /Navigation";
import About from "../About/About";
import Reviews1 from "../Reviews/Reviews1";
import Fragment from "../Fragment/Fragment";
import Footer from "../Footer/Footer";
import Policy from "../Policy/Policy";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="app">
      {/* <Navigation /> */}
      <Header handleOpen={handleOpen} />
      <Author />
      <About />
      <Fragment />
      <Reviews1 />
      <Reviews />
      <Policy handleOpen={handleOpen} />
      <Footer />
      <Modal isOpen={open} onClose={handleClose} />
    </div>
  );
};

export default App;
