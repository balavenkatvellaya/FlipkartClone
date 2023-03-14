import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetails from "./pages/Productdetails";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProceedPayment from "./pages/ProceedPayment";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    let url =
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  console.log({ data });
  console.log("cart", localStorage.length);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar data={data} />
        <Routes>
          <Route path="/" element={<Home Homedata={data} />} />
          <Route path="/products" element={<Products Data={data} />} />
          <Route
            path="/productdetails/:id"
            element={<Productdetails Data={data} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/proceedpayment" element={<ProceedPayment />} />
        </Routes>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
