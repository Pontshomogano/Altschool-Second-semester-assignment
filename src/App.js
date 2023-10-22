import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import FourOFour from "./pages/FourOFour";
// import Link from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signin from "./pages/Signin";
import Contact from "./pages/contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="*" element={<FourOFour />}></Route>
      </Routes>
    </>
  );
};

export default App;
