import { useState } from "react";
import "./App.css";
import "./assets/stylebaru.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Product from "./pages/Product/Product";
import Detail from "./pages/Detail";
import Negara from "./pages/Negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const theme = useState ("light");
  return (
    <>
      <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
          <Route path="/product" element={<Product />} />
          <Route path="/negara" element={<Negara />} />
          <Route path="/detailnegara/:id" element={<DetailNegara />} />
        </Routes>
        <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
