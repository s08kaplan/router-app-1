import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../src/components/NavBar";
import Home from "../src/Pages/Home";
import Gallery from "../src/Pages/Gallery";
import Contact from "../src/Pages/Contact";
import About from "../src/Pages/About";
import NotFound from "./Pages/NotFound";
import Footer from "../src/components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductCardDetail from "./Pages/ProductCardDetail";
function App() {
  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductCardDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;
