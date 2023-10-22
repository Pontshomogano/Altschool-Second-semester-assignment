import React from "react";
import "./FourOFour.css";
import NavbarComponent from "../components/navbar";

const FourOFour = (props) => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="App">
        <h1 className="Oops">Oops!</h1>
        <h2>404-PAGE NOT FOUND</h2>

        <img src="/ErrorImage.png" className="error" alt="" />
      </div>
    </>
  );
};

export default FourOFour;
