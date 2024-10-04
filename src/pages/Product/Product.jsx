import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductView from "./ProductView";

export default function Product() {
  const [data, setData] = useState();
  
  const ambilData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  useEffect(() => {
    ambilData();
  }, []);

  return <ProductView data={data} />;
}
