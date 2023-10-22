import { useEffect, useState } from "react";
import GetLocalStorage from "./localstorage";
import { useNavigate } from "react-router-dom"; // used to navigate to other pages programmically

// validate function thats added to every authenticable page on the website
const Validate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage) {
      if (GetLocalStorage("moganoapp") === null) {
        navigate("/signin", { replace: true });
      }
    }
  }, []);
};

export default Validate;
