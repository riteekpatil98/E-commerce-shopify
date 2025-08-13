import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { SHopCategory } from "./Pages/SHopCategory";
import { Product } from "./Pages/Product";
import { Card } from "./Pages/Card";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footers/Footer";
import women_banner from "./assets/women_banner.avif";
import kids_banner from "./assets/kids_banner.jpg";
import mens_banner from "./assets/banner.jpg";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route
            path="/mens"
            element={
              <SHopCategory banner={mens_banner} category="men"></SHopCategory>
            }
          ></Route>
          <Route
            path="/womens"
            element={
              <SHopCategory
                banner={women_banner}
                category="women"
              ></SHopCategory>
            }
          ></Route>
          <Route
            path="/kids"
            element={
              <SHopCategory banner={kids_banner} category="kid"></SHopCategory>
            }
          ></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route
            path="/product/:productId"
            element={<Product></Product>}
          ></Route>
          <Route path="/card" element={<Card></Card>}></Route>
          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
