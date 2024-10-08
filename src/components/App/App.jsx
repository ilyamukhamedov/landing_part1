import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Author from "../Author/Author";
import Reviews from "../Reviews/Reviews";
import About from "../About/About";
import Fragment from "../Fragment/Fragment";
import Footer from "../Footer/Footer";
import Policy from "../Policy/Policy";
import ModalPreview from "../ModalPreview/ModalPreview";

const App = () => {
  const [openPreview, setOpenPreview] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleClick = () => {
    window.open("https://nbgarden.ru/book_2", "_blank");
  };

  const handleOpenPreview = (imageSrc) => {
    setCurrentImage(imageSrc);
    setOpenPreview(true);
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  return (
    <div className="app">
      <Header openBook={handleClick} />
      <Author />
      <About />
      <Fragment handleOpen={handleOpenPreview} />
      <Reviews />
      <Policy openBook={handleClick} />
      <Footer />
      <ModalPreview
        isOpen={openPreview}
        onClose={handleClosePreview}
        imageSrc={currentImage}
      />
    </div>
  );
};

export default App;
